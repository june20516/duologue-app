# API 에러 처리 방식 변경 안내

## 변경 일자
2026-01-28

## 변경 요약

API 응답 구조가 변경되었습니다. 기존의 `oneof result { success, error }` 패턴을 제거하고, **Connect RPC 표준 에러 처리 방식**으로 통일합니다.

### Before (기존)
```
HTTP 200 OK
{
  "result": {
    "success": { ... }  // 또는
    "error": { "code": "ERROR_CODE_XXX", "message": "..." }
  }
}
```

### After (변경 후)
```
// 성공 시
HTTP 200 OK
{ "userId": "123", "email": "user@example.com" }

// 에러 시
HTTP 4xx/5xx
Connect Error (details에 Error proto 포함)
```

---

## 에러 처리 방법

### TypeScript (Connect-Web)

```typescript
import { ConnectError } from "@connectrpc/connect";
import { Error as ProtoError, ErrorCode } from "./gen/duologue/v1/common_pb";

async function callApi() {
  try {
    const response = await client.getMe({});
    // 성공: response에서 직접 데이터 접근
    console.log(response.userId, response.email);

  } catch (err) {
    if (err instanceof ConnectError) {
      // 1. HTTP 상태 코드로 분기
      console.log("HTTP Code:", err.code);  // e.g., "unauthenticated"

      // 2. 애플리케이션 에러 코드 추출
      const [protoError] = err.findDetails(ProtoError);

      if (protoError) {
        // ErrorCode enum으로 타입 안전하게 분기
        switch (protoError.code) {
          case ErrorCode.AUTH_REQUIRED:
            redirectToLogin();
            break;
          case ErrorCode.INVALID_TOKEN:
            refreshToken();
            break;
          case ErrorCode.PROFILE_NOT_FOUND:
            navigateTo("/profile/setup");
            break;
          case ErrorCode.ALREADY_IN_QUEUE:
            showToast("이미 대기열에 있습니다");
            break;
          case ErrorCode.QUEUE_ERROR:
            showToast("대기열 오류가 발생했습니다");
            break;
          default:
            showToast(protoError.message);
        }
      }
    }
  }
}
```

### 에러 추출 유틸리티 함수 (권장)

```typescript
import { ConnectError } from "@connectrpc/connect";
import { Error as ProtoError, ErrorCode } from "./gen/duologue/v1/common_pb";

interface AppError {
  code: ErrorCode;
  message: string;
  httpCode: string;
}

export function extractError(err: unknown): AppError | null {
  if (!(err instanceof ConnectError)) {
    return null;
  }

  const [protoError] = err.findDetails(ProtoError);

  return {
    code: protoError?.code ?? ErrorCode.UNSPECIFIED,
    message: protoError?.message ?? err.message,
    httpCode: err.code,
  };
}

// 사용 예시
try {
  await client.joinQueue({});
} catch (err) {
  const appError = extractError(err);
  if (appError) {
    handleError(appError.code, appError.message);
  }
}
```

---

## ErrorCode 목록

| Code | 값 | 설명 | HTTP Code |
|------|---|------|-----------|
| `ERROR_CODE_UNSPECIFIED` | 0 | 미지정 | Unknown |
| `ERROR_CODE_INVALID_PROTOBUF` | 1 | 잘못된 요청 형식 | InvalidArgument |
| `ERROR_CODE_HANDLER_ERROR` | 2 | 핸들러 오류 | Internal |
| `ERROR_CODE_AUTH_TIMEOUT` | 3 | 인증 시간 초과 | DeadlineExceeded |
| `ERROR_CODE_AUTH_ERROR` | 4 | 인증 오류 | InvalidArgument |
| `ERROR_CODE_AUTH_REQUIRED` | 5 | 인증 필요 | Unauthenticated |
| `ERROR_CODE_INVALID_TOKEN` | 6 | 유효하지 않은 토큰 | Unauthenticated |
| `ERROR_CODE_ALREADY_CONNECTED` | 7 | 이미 연결됨 | AlreadyExists |
| `ERROR_CODE_PROFILE_ERROR` | 8 | 프로필 오류 | Internal |
| `ERROR_CODE_PROFILE_NOT_FOUND` | 9 | 프로필 없음 | NotFound |
| `ERROR_CODE_ALREADY_IN_QUEUE` | 10 | 이미 대기열에 있음 | AlreadyExists |
| `ERROR_CODE_QUEUE_ERROR` | 11 | 대기열 오류 | Internal |
| `ERROR_CODE_NOT_IN_QUEUE` | 12 | 대기열에 없음 | NotFound |
| `ERROR_CODE_MATCH_NOT_FOUND` | 13 | 매치 없음 | NotFound |
| `ERROR_CODE_NOT_PARTICIPANT` | 14 | 참가자 아님 | PermissionDenied |
| `ERROR_CODE_ACCEPT_ERROR` | 15 | 수락 오류 | Internal |
| `ERROR_CODE_MATCH_ERROR` | 16 | 매치 오류 | Internal |
| `ERROR_CODE_REJECT_ERROR` | 17 | 거절 오류 | Internal |
| `ERROR_CODE_SYSTEM_ERROR` | 18 | 시스템 오류 | Internal |
| `ERROR_CODE_INVALID_ARGUMENT` | 19 | 잘못된 인자 | InvalidArgument |
| `ERROR_CODE_INTERNAL` | 20 | 내부 오류 | Internal |
| `ERROR_CODE_ALREADY_EXISTS` | 21 | 이미 존재함 | AlreadyExists |

---

## Response 구조 변경 상세

### AuthService

| RPC | Before | After |
|-----|--------|-------|
| `RequestSignup` | `result.success.message` | `message` |
| `VerifySignup` | `result.success.access_token`, `result.success.refresh_token` | `access_token`, `refresh_token` |
| `RequestLogin` | `result.success.message` | `message` |
| `VerifyLogin` | `result.success.access_token`, `result.success.refresh_token` | `access_token`, `refresh_token` |
| `RefreshAccessToken` | `result.success.access_token` | `access_token` |
| `Logout` | `result.success.message` | `message` |
| `GetMe` | `result.success.user_id`, `result.success.email` | `user_id`, `email` |
| `DeleteAccount` | `result.success.message` | `message` |

### ProfileService

| RPC | Before | After |
|-----|--------|-------|
| `GetMyProfile` | `result.success.profile` | `profile` |
| `UpdateMyProfile` | `result.success.profile` | `profile` |
| `GetUserProfile` | `result.success.profile` | `profile` |
| `CheckNickname` | `result.success.available` | `available` |

### MatchService

| RPC | Before | After |
|-----|--------|-------|
| `GetMyMatches` | `result.success.matches` | `matches` |
| `GetMatch` | `result.success.match` | `match` |
| `DeleteMatch` | `result.success` (empty) | (empty) |

### MatchPresetService

| RPC | Before | After |
|-----|--------|-------|
| `GetMatchPreset` | `result.success.preset` | `preset` |
| `UpdateMatchPreset` | `result.success.preset` | `preset` |
| `DeleteMatchPreset` | `result.success.message` | `message` |

### TicketService

| RPC | Before | After |
|-----|--------|-------|
| `GetMyTickets` | `result.success.match_ticket`, etc. | `match_ticket`, etc. |

### InterestService

| RPC | Before | After |
|-----|--------|-------|
| `GetInterests` | `result.success.interests` | `interests` |

---

## 마이그레이션 체크리스트

- [ ] proto 파일 재생성 (`buf generate`)
- [ ] 응답 파싱 코드 수정 (`result.success.xxx` → `xxx`)
- [ ] 에러 처리 코드 수정 (`result.error` 체크 → `try-catch` + `findDetails`)
- [ ] 에러 추출 유틸리티 함수 작성
- [ ] 테스트

---

## 문의

백엔드 담당자에게 문의해주세요.
