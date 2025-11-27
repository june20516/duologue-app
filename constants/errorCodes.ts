/**
 * API 에러 코드 상수
 * 서버에서 반환하는 error 필드의 값들
 */
export const ErrorCode = {
  // Refresh Token 관련
  REFRESH_TOKEN_EXPIRED: 'REFRESH_TOKEN_EXPIRED',
  INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',

  // Access Token 관련
  INVALID_TOKEN: 'INVALID_TOKEN',
  UNAUTHORIZED: 'UNAUTHORIZED',

  // 사용자 관련
  USER_NOT_FOUND: 'USER_NOT_FOUND',
} as const;

export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode];
