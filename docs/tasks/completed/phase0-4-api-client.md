# Phase 0-4: API 클라이언트 설정

## 작성일

2025-11-19

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

Axios 기반 API 클라이언트 및 React Query 설정
- HTTP 요청/응답 처리
- 토큰 기반 인증 및 자동 갱신
- 서버 상태 관리 및 캐싱

## 작업 목적

백엔드 API와의 효율적인 통신을 위한 인프라를 구축하고, 서버 상태를 일관되게 관리

## 작업 범위

### 포함 사항
- [x] Axios 인스턴스 생성 및 설정
- [x] Request 인터셉터 (토큰 추가)
- [x] Response 인터셉터 (에러 처리, 토큰 갱신)
- [x] React Query 설정
- [x] API 에러 핸들링 유틸리티
- [x] 환경 변수 기반 baseURL 설정

### 제외 사항
- 실제 API 엔드포인트 구현
- 비즈니스 로직
- 복잡한 캐싱 전략 (기본만)

## 기술적 접근

### 사용할 기술/라이브러리

- **Axios**: HTTP 클라이언트
- **@tanstack/react-query**: 서버 상태 관리
- **Zustand**: 인증 토큰 저장
- **@react-native-async-storage/async-storage**: Refresh Token 영구 저장

### 파일 구조

```
src/
├── lib/
│   ├── api.ts                  # Axios 인스턴스
│   └── queryClient.ts          # React Query 설정
├── api/
│   ├── client.ts               # API 클라이언트 (재export)
│   └── error.ts                # 에러 핸들러
├── stores/
│   └── authStore.ts            # 토큰 관리 (확장)
└── types/
    └── api.ts                  # API 관련 타입
```

### 구현 단계

1. **환경 변수 설정** (`.env`)
   ```
   EXPO_PUBLIC_API_URL=http://localhost:8080/api/v1
   ```

2. **Axios 인스턴스 생성** (`src/lib/api.ts`)
   ```typescript
   import axios from 'axios';
   import { useAuthStore } from '@/stores/authStore';

   const api = axios.create({
     baseURL: process.env.EXPO_PUBLIC_API_URL,
     timeout: 10000,
     headers: {
       'Content-Type': 'application/json',
     },
   });

   // Request 인터셉터: 토큰 추가
   api.interceptors.request.use((config) => {
     const token = useAuthStore.getState().accessToken;
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
   });

   // Response 인터셉터: 토큰 갱신
   api.interceptors.response.use(
     (response) => response,
     async (error) => {
       const originalRequest = error.config;

       if (error.response?.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
           const refreshToken = useAuthStore.getState().refreshToken;
           const { data } = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/refresh`, {
             refreshToken,
           });

           useAuthStore.getState().setTokens(data.accessToken, data.refreshToken);
           originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

           return api(originalRequest);
         } catch (refreshError) {
           useAuthStore.getState().logout();
           return Promise.reject(refreshError);
         }
       }

       return Promise.reject(error);
     }
   );

   export default api;
   ```

3. **React Query 설정** (`src/lib/queryClient.ts`)
   ```typescript
   import { QueryClient } from '@tanstack/react-query';

   export const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         staleTime: 1000 * 60 * 5,        // 5분
         gcTime: 1000 * 60 * 30,          // 30분 (구 cacheTime)
         retry: 1,
         refetchOnWindowFocus: false,
       },
       mutations: {
         retry: 0,
       },
     },
   });
   ```

4. **QueryClientProvider 추가** (`app/_layout.tsx`)
   ```typescript
   import { QueryClientProvider } from '@tanstack/react-query';
   import { queryClient } from '@/lib/queryClient';

   export default function RootLayout() {
     return (
       <QueryClientProvider client={queryClient}>
         <TamaguiProvider>
           {/* ... */}
         </TamaguiProvider>
       </QueryClientProvider>
     );
   }
   ```

5. **에러 핸들러** (`src/api/error.ts`)
   ```typescript
   import { AxiosError } from 'axios';

   export interface ApiError {
     code: string;
     message: string;
     status?: number;
   }

   export function handleApiError(error: unknown): ApiError {
     if (error instanceof AxiosError) {
       return {
         code: error.response?.data?.error || 'UNKNOWN_ERROR',
         message: error.response?.data?.message || '오류가 발생했습니다',
         status: error.response?.status,
       };
     }

     return {
       code: 'NETWORK_ERROR',
       message: '네트워크 연결을 확인해주세요',
     };
   }
   ```

6. **authStore 확장** (`src/stores/authStore.ts`)
   ```typescript
   import AsyncStorage from '@react-native-async-storage/async-storage';
   import { create } from 'zustand';
   import { persist, createJSONStorage } from 'zustand/middleware';

   interface AuthState {
     accessToken: string | null;
     refreshToken: string | null;
     isAuthenticated: boolean;

     setTokens: (access: string, refresh: string) => void;
     logout: () => void;
   }

   export const useAuthStore = create<AuthState>()(
     persist(
       (set) => ({
         accessToken: null,
         refreshToken: null,
         isAuthenticated: false,

         setTokens: (access, refresh) => set({
           accessToken: access,
           refreshToken: refresh,
           isAuthenticated: true,
         }),

         logout: () => set({
           accessToken: null,
           refreshToken: null,
           isAuthenticated: false,
         }),
       }),
       {
         name: 'auth-storage',
         storage: createJSONStorage(() => AsyncStorage),
       }
     )
   );
   ```

7. **더미 API 테스트**
   - 테스트용 엔드포인트 호출
   - React Query 훅 작성 및 사용

## 검증 방법

### 테스트 케이스

1. **API 호출**
   - 입력: `api.get('/test')` 호출
   - 예상 결과: 정상 요청 또는 적절한 에러

2. **토큰 자동 추가**
   - 입력: authStore에 토큰 설정 후 API 호출
   - 예상 결과: Authorization 헤더에 토큰 포함

3. **401 에러 시 토큰 갱신**
   - 입력: 401 응답 시뮬레이션
   - 예상 결과: Refresh Token으로 재시도

### 수동 확인

- [x] Axios 인스턴스 생성 확인
- [x] Request 인터셉터 동작 (토큰 추가)
- [x] Response 인터셉터 동작 (에러 처리)
- [x] React Query QueryClient 설정 확인
- [x] authStore persist 동작 (앱 재시작 후 유지)
- [x] 에러 핸들러 정상 동작

## 의존성

### 선행 작업
- Phase 0-1: 프로젝트 초기 설정 완료
- Phase 0-3: 네비게이션 및 authStore 기본 구조

### 후속 작업
- Phase 1: 실제 인증 API 연동
- 모든 Phase에서 API 클라이언트 활용

## 주의사항

- **타입 안전성**: API 응답 타입 명시
- **성능**: React Query staleTime 적절히 설정
- **보안**: Refresh Token은 AsyncStorage에 암호화하여 저장 고려
- **에러 처리**: 모든 API 호출에서 에러 핸들링 필수

## 참고 자료

- [Axios 공식 문서](https://axios-http.com/)
- [React Query 공식 문서](https://tanstack.com/query/latest)
- [Zustand Persist](https://docs.pmnd.rs/zustand/integrations/persisting-store-data)
- [프론트엔드 로드맵](../roadmap.md)
- [도메인 모델](../../specs/domain-model.md)

---

## 작업 이력

### [2025-11-24] 작업 완료

- ✅ Axios 및 React Query 패키지 설치 완료
  - `yarn add axios @tanstack/react-query`
- ✅ API 클라이언트 인프라 구축 완료
  - `lib/api.ts`: Axios 인스턴스 및 인터셉터 구현
  - `lib/queryClient.ts`: React Query 설정
  - `api/error.ts`: 에러 핸들러 유틸리티
  - `types/api.ts`: API 관련 타입 정의
- ✅ app/_layout.tsx에 QueryClientProvider 추가
- ✅ authStore의 clearAuth 메서드 사용 (문서와 실제 구현 일치)
- ✅ 환경 변수 기반 baseURL 설정 (.env.local 사용)
- ✅ 타입 체크 통과

### [2025-11-19] 작업 문서 작성

- Phase 0-4 작업 문서 작성 완료
