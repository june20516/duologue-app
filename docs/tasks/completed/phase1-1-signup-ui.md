# Phase 1-1: Passwordless 회원가입 UI

## 작성일

2025-11-24

## 우선순위

- [x] 긴급
- [ ] 높음
- [ ] 보통
- [ ] 낮음

## 작업 개요

Passwordless 방식의 회원가입 UI 구현

- 이메일 입력 화면
- 인증 코드 입력 화면
- 인증 플로우 구현

## 작업 목적

사용자가 비밀번호 없이 이메일과 인증 코드만으로 간편하게 회원가입할 수 있는 UI 제공

## 작업 범위

### 포함 사항

- [x] 이메일 입력 화면 (`app/auth/signup.tsx` - 통합)
- [x] 인증 코드 입력 화면 (`app/auth/signup.tsx` - 통합)
- [x] 이메일 유효성 검증 (클라이언트) - React Hook Form + Zod
- [x] 인증 코드 5분 타이머 (텍스트 + 프로그레스바)
- [x] 에러 메시지 표시
- [x] Zustand `authStore` 생성 (`stores/authStore.ts`)
- [x] 회원가입 API 연동 (`api/auth.ts`, `queries/useMutationAuth.ts`)

### 제외 사항

- 로그인 기능 (Phase 1-2에서 진행)
- 프로필 설정 (Phase 1-3에서 진행)
- 소셜 로그인

## 기술적 접근

### 사용할 패키지

- **React Hook Form**: 폼 상태 관리 및 유효성 검증
- **Zod**: 스키마 기반 유효성 검증
- **@hookform/resolvers**: React Hook Form + Zod 통합

```bash
yarn add react-hook-form zod @hookform/resolvers
```

### 백엔드 API

- `POST /api/v1/auth/request-signup` - 인증 코드 요청
- `POST /api/v1/auth/verify-signup` - 인증 코드 검증

### 상태 관리

**Zustand Store** (`stores/authStore.ts`):
```typescript
interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  setTokens: (access: string, refresh: string) => void;
  setUser: (user: User) => void;
  clearAuth: () => void;
}
```

### UX 플로우

1. 이메일 입력 화면
2. "인증 코드를 이메일로 발송했습니다" 안내
3. 인증 코드 입력 화면 (6자리, 자동 제출)
4. 회원가입 성공 → 프로필 설정 화면으로 이동

### 유효성 검증 스키마

```typescript
// utils/validation/authSchemas.ts
import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
});

export const verifyCodeSchema = z.object({
  code: z.string().length(6, '인증 코드는 6자리입니다'),
});
```

### 구현 단계

1. **Zustand authStore 생성**
   - 토큰 관리
   - 사용자 정보 관리

2. **이메일 입력 화면**
   - React Hook Form + Zod로 폼 관리
   - 이메일 유효성 검증 (자동)
   - 다음 버튼 (유효성 검증 통과 시 활성화)

3. **인증 코드 입력 화면**
   - 6자리 코드 입력 (OTP 스타일)
   - 5분 카운트다운 타이머 (텍스트 + 선형 프로그레스바)
   - 재전송 버튼
   - 자동 제출 (6자리 입력 완료 시)

4. **API 연동**
   - Axios 인스턴스 사용
   - 에러 핸들링
   - 성공 시 토큰 저장

5. **네비게이션**
   - 성공 시 `app/auth/profile-setup.tsx`로 이동

## 검증 방법

### 테스트 케이스

1. **이메일 유효성 검증**
   - 입력: 잘못된 이메일 형식
   - 예상 결과: 에러 메시지 표시, 다음 버튼 비활성화

2. **인증 코드 요청**
   - 입력: 유효한 이메일
   - 예상 결과: 인증 코드 입력 화면으로 이동, 타이머 시작

3. **인증 코드 검증**
   - 입력: 6자리 코드
   - 예상 결과: 자동 제출, 성공 시 프로필 설정 화면으로 이동

4. **타이머 만료**
   - 입력: 5분 경과
   - 예상 결과: 재전송 버튼 활성화, 만료 안내 메시지

### 수동 확인

- [x] 이메일 입력 필드 정상 동작
- [x] 이메일 유효성 검증 동작
- [x] 인증 코드 요청 성공
- [x] 인증 코드 입력 화면 표시 (애니메이션 전환)
- [x] 5분 타이머 정상 동작 (텍스트 + 프로그레스바)
- [x] 6자리 입력 시 자동 제출
- [x] 인증 성공 시 토큰 저장 (authStore)
- [x] 프로필 설정 화면으로 이동 (인증 가드)
- [x] 에러 케이스 처리 (네트워크 에러, 잘못된 코드 등)

## 의존성

### 선행 작업

- Phase 0-4: API 클라이언트 설정
- 백엔드 Phase 1 API 완료

### 후속 작업

- Phase 1-2: Passwordless 로그인 UI
- Phase 1-3: 프로필 설정 UI

## 주의사항

- 이메일 유효성 검증은 클라이언트에서만 진행 (서버에서도 검증)
- 인증 코드는 노출되지 않도록 처리
- 타이머는 정확히 5분 (300초)
- 재전송 시 이전 코드 무효화 안내
- 에러 메시지는 사용자 친화적으로 표시
- Yarn 패키지 매니저 사용
- 코드 작성 시 프로젝트 규칙 준수 (이모지 금지, any 타입 금지, Arrow Function 사용)

## 참고 자료

- [프론트엔드 로드맵](../roadmap.md)
- [프로젝트 규칙](../../../.claude-project-rules.md)
- [백엔드 API 문서](../../specs/backend-domain-model.md)

---

## 작업 이력

### [2025-12-01] 작업 완료

- 회원가입 UI 및 로직 구현 완료
- 이메일/인증 코드 입력 화면 통합 구현 (`app/auth/signup.tsx`)
- React Hook Form + Zod 유효성 검증
- Zustand authStore 생성 및 토큰 관리
- 5분 타이머 + 프로그레스바 구현
- 6자리 코드 자동 제출
- 애니메이션 전환 효과
- 백버튼 제어 (코드 입력 단계)
- API 연동 완료

### [2025-11-24] 작업 문서 작성

- Phase 1-1 작업 문서 작성 완료
- 백엔드 API 완료 대기 중
