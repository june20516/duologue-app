# 토큰 갱신 로직

## 프로세스

### 1. 401 응답 처리 흐름

```
401 응답 수신
  ↓
리프레시 토큰으로 액세스 토큰 갱신
  ↓
갱신된 토큰 저장
  ↓
갱신된 토큰으로 원래 요청 재시도
```

### 2. 갱신 실패 처리

- **토큰 만료**: 인증 정보 삭제 + `/index`로 이동
- **기타 에러**: 에러 throw

### 3. 동시 요청 처리 (핵심)

```
상태: idle | refreshing

[시나리오 1: 단일 요청]
요청A → 401 → status: refreshing → 갱신 → status: idle → 요청A 재시도

[시나리오 2: 동시 다중 요청]
요청A → 401 → status: refreshing → 갱신 시작
요청B → 401 → status가 refreshing → 대기
요청C → 401 → status가 refreshing → 대기
  ↓
갱신 완료 → status: idle
  ↓
요청A, B, C 모두 새 토큰으로 재시도
```

## 설계 방안: 싱글톤 토큰 매니저

### 선택 이유

1. **UI 무관**: 토큰 갱신 상태는 UI에 표시되지 않음
2. **성능**: React 리렌더링 불필요
3. **단순성**: API 레이어 내부 로직으로 캡슐화
4. **경량**: Zustand 오버헤드 없음

### 구조 설계

#### TokenRefreshManager 클래스

```typescript
class TokenRefreshManager {
  private status: 'idle' | 'refreshing';
  private refreshPromise: Promise<string> | null;

  // 공개 메서드
  refresh(): Promise<string>;
  reset(): void;
  isRefreshing(): boolean;

  // 비공개 메서드
  private performRefresh(): Promise<string>;
}
```

#### 동작 흐름

```typescript
refresh() 호출
  ↓
이미 refreshing 상태?
  YES → 기존 refreshPromise 반환 (중복 방지)
  NO  → status = 'refreshing'
        refreshPromise = performRefresh()
        refreshPromise 반환
  ↓
performRefresh()
  ↓
성공 → 토큰 저장 → reset() → 새 accessToken 반환
실패 → reset() → 에러 처리
  - 만료: clearAuth() + router.replace('/')
  - 기타: throw error
```

## 구성 및 적용

### 1. 토큰 매니저

**파일**: `/lib/tokenManager.ts`

**책임**:

- 토큰 갱신 상태 관리
- 중복 갱신 방지
- 토큰 갱신 API 호출
- 에러 처리 및 로그아웃

**핵심 로직**:

```typescript
async refresh(): Promise<string> {
  if (this.isRefreshing() && this.refreshPromise) {
    return this.refreshPromise; // 이미 진행 중인 갱신 대기
  }

  this.status = 'refreshing';
  this.refreshPromise = this.performRefresh();
  return this.refreshPromise;
}
```

### 2. API 인터셉터 수정

**파일**: `/api/client.ts`

#### 요청 인터셉터

```typescript
apiClient.interceptors.request.use((config) => {
  // 기존 로직...

  // Authorization 헤더 추가
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
```

#### 응답 인터셉터

```typescript
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401이 아니거나 이미 재시도한 요청이면 에러 반환
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // 재시도 플래그 설정 (무한 루프 방지)
    originalRequest._retry = true;

    try {
      // 토큰 갱신 (중복 방지 내장)
      const newAccessToken = await tokenManager.refresh();

      // 새 토큰으로 헤더 업데이트
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      // 원래 요청 재시도
      return apiClient(originalRequest);
    } catch (refreshError) {
      // 갱신 실패 시 에러 전파 (tokenManager에서 이미 로그아웃 처리함)
      return Promise.reject(refreshError);
    }
  }
);
```

### 3. auth.ts

**파일**: `/api/auth.ts`

- refresh 엔드포인트를 tokenManager에서 직접 호출하므로 별도 함수 불필요
- 필요시 타입 정의만 추가

## 주의사항

1. **무한 루프 방지**: `_retry` 플래그로 한 번만 재시도
2. **중복 갱신 방지**: Promise 캐싱으로 동시 요청 처리
3. **타입 안전성**: any 타입 사용 지양
4. **에러 처리**: 만료 vs 기타 에러 명확히 구분
5. **라우팅**: `router.replace('/')` 사용 (뒤로가기 방지)
6. **토큰 저장**: authStore의 setTokens 사용
7. **snake_case 변환**: refresh API 요청 시 body가 snake_case로 변환되는지 확인

## 테스트 시나리오

1. ✅ 단일 요청이 401을 받는 경우
2. ✅ 여러 요청이 동시에 401을 받는 경우 (중복 갱신 방지)
3. ✅ 토큰 갱신 성공 → 원래 요청 재시도
4. ✅ 토큰 만료로 갱신 실패 → 로그아웃 + `/index` 이동
5. ✅ 기타 에러로 갱신 실패 → 에러 throw
6. ✅ 갱신 중 다른 요청 대기 → 갱신 완료 후 함께 재시도
