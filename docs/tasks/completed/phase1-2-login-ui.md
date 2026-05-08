# Phase 1-2: Passwordless 로그인 UI

## 작성일

2025-11-24

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

Passwordless 방식의 로그인 UI 및 인증 관리 기능 구현

- 로그인 플로우 (회원가입 화면 재사용)
- 자동 로그인 (Refresh Token)
- 로그아웃 기능
- 인증 가드 (Protected Routes)

## 작업 목적

사용자가 비밀번호 없이 간편하게 로그인하고, 자동 로그인으로 편의성을 제공하며, 인증되지 않은 사용자의 접근을 제어

## 작업 범위

### 포함 사항

- [x] 회원가입 화면과 유사한 구조로 로그인 화면 구현 (`app/auth/signin.tsx`)
- [x] 인증 가드 (Protected Routes) - `app/index.tsx`에서 구현
- [x] authStore 구현 (`stores/authStore.ts`)
- [x] 로그인 API 연동 (`api/auth.ts`, `queries/useMutationAuth.ts`)
- [x] AsyncStorage를 통한 토큰 영속화
- [x] 자동 로그인 구현 (AsyncStorage persist)
- [x] 로그아웃 기능 (`authStore.logout()`)
- [x] 토큰 자동 갱신 (API 인터셉터, `lib/tokenManager.ts`)

### 제외 사항

- 회원가입 기능 (Phase 1-1에서 완료)
- 프로필 설정 (Phase 1-3에서 진행)
- 비밀번호 찾기

## 기술적 접근

### 백엔드 API

- `POST /api/v1/auth/request-login` - 로그인 인증 코드 요청
- `POST /api/v1/auth/verify-login` - 로그인 인증 코드 검증
- `POST /api/v1/auth/refresh` - 토큰 갱신
- `POST /api/v1/auth/logout` - 로그아웃

### 상태 관리

**Zustand Store 확장** (`stores/authStore.ts`):
```typescript
interface AuthStore {
  // 기존
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  setTokens: (access: string, refresh: string) => void;
  setUser: (user: User) => void;
  clearAuth: () => void;

  // 추가
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  isAuthenticated: () => boolean;
}
```

### UX 플로우

**로그인**:
1. 이메일 입력 (회원가입과 동일한 화면)
2. 인증 코드 입력 (회원가입과 동일한 화면)
3. 로그인 성공 → 메인 화면으로 이동

**자동 로그인**:
1. 앱 시작 시 Refresh Token 확인
2. 유효하면 Access Token 갱신
3. 자동으로 메인 화면으로 이동

### 구현 단계

1. **authStore 확장**
   - `logout()` 메서드 추가
   - `refreshToken()` 메서드 추가
   - `isAuthenticated()` 메서드 추가

2. **회원가입 화면 재사용**
   - `type` prop 추가 (`'signup' | 'login'`)
   - 타이틀과 버튼 텍스트만 변경
   - API 엔드포인트만 변경

3. **자동 로그인 구현**
   - 앱 시작 시 Refresh Token 확인
   - 유효하면 자동으로 토큰 갱신
   - 실패 시 로그인 화면으로 이동

4. **로그아웃 기능**
   - 로그아웃 API 호출
   - 로컬 스토리지에서 토큰 제거
   - authStore 초기화
   - 로그인 화면으로 이동

5. **인증 가드 구현**
   - `app/_layout.tsx`에서 인증 상태 확인
   - 인증되지 않은 사용자는 로그인 화면으로 리다이렉트
   - 프로필 미완성 사용자는 프로필 설정 화면으로 리다이렉트

6. **API 인터셉터 설정**
   - Access Token 만료 시 자동으로 Refresh Token으로 갱신
   - 갱신 실패 시 로그인 화면으로 이동

## 검증 방법

### 테스트 케이스

1. **로그인 플로우**
   - 입력: 유효한 이메일 및 인증 코드
   - 예상 결과: 로그인 성공, 메인 화면으로 이동

2. **자동 로그인**
   - 입력: 앱 재시작
   - 예상 결과: 로그인 화면 없이 바로 메인 화면으로 이동

3. **로그아웃**
   - 입력: 로그아웃 버튼 클릭
   - 예상 결과: 로그인 화면으로 이동, 토큰 삭제

4. **인증 가드**
   - 입력: 인증되지 않은 상태에서 메인 화면 접근 시도
   - 예상 결과: 로그인 화면으로 리다이렉트

5. **토큰 갱신**
   - 입력: Access Token 만료 후 API 요청
   - 예상 결과: 자동으로 토큰 갱신, 요청 재시도

### 수동 확인

- [x] 로그인 플로우 정상 동작
- [x] 인증 가드 정상 동작 (`app/index.tsx`)
- [x] AsyncStorage를 통한 토큰 영속화
- [x] 자동 로그인 정상 동작 (AsyncStorage persist)
- [x] 로그아웃 정상 동작 (`authStore.logout()` 구현됨)
- [x] 토큰 갱신 자동 동작 (`tokenManager.refresh()` - 중복 방지 포함)
- [x] Refresh Token 만료 시 로그인 화면으로 이동
- [x] 401 에러 시 자동 토큰 갱신 및 요청 재시도
- [x] USER_NOT_FOUND 에러 처리 (즉시 로그아웃 + 에러 모달)
- [x] 에러 케이스 처리

## 의존성

### 선행 작업

- Phase 1-1: Passwordless 회원가입 UI
- Phase 0-4: API 클라이언트 설정
- 백엔드 Phase 1 API 완료

### 후속 작업

- Phase 1-3: 프로필 설정 UI

## 주의사항

- Refresh Token은 안전하게 저장 (SecureStore 사용)
- Access Token은 메모리에만 저장
- 로그아웃 시 서버에도 알림 (Refresh Token 무효화)
- 인증 가드는 모든 Protected Routes에 적용
- 토큰 갱신 중복 요청 방지
- Yarn 패키지 매니저 사용
- 코드 작성 시 프로젝트 규칙 준수

## 참고 자료

- [프론트엔드 로드맵](../roadmap.md)
- [프로젝트 규칙](../../../.claude-project-rules.md)
- [백엔드 API 문서](../../specs/backend-domain-model.md)
- [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/)

---

## 작업 이력

### [2025-12-01] 작업 완료

**구현 완료 항목**:
- 로그인 UI 및 로직 구현 (`app/auth/signin.tsx`)
- 인증 가드 (`app/index.tsx`)
- authStore 구현 및 AsyncStorage 영속화
- 로그인 API 연동
- 이메일/인증 코드 플로우 (회원가입과 동일)
- 로그아웃 기능 (`authStore.logout()`, `api/auth.ts`)
- 자동 로그인 (AsyncStorage persist)
- 토큰 자동 갱신 (`lib/tokenManager.ts`)
  - 중복 갱신 방지 로직
  - 401 에러 시 자동 갱신 및 요청 재시도
  - Refresh Token 만료 시 자동 로그아웃
- 에러 처리
  - USER_NOT_FOUND: 즉시 로그아웃 + 에러 모달
  - REFRESH_TOKEN_EXPIRED: 자동 로그아웃
  - 네트워크 에러 처리

**기술 구현 세부사항**:
- `api/client.ts`: 401 에러 인터셉터로 토큰 자동 갱신
- `lib/tokenManager.ts`: 싱글톤 패턴으로 중복 갱신 방지
- `stores/authStore.ts`: Zustand persist로 AsyncStorage 자동 동기화
- `app/index.tsx`: 인증 상태 기반 라우팅 가드

### [2025-11-24] 작업 문서 작성

- Phase 1-2 작업 문서 작성 완료
- Phase 1-1 완료 후 진행 예정
