import { ConnectError } from '@connectrpc/connect';

import { Error as ProtoError, ErrorCode } from '../gen/duologue/v1/common_pb';

/**
 * 어플리케이션 비즈니스 로직 에러
 * Proto에 정의된 Error 메시지를 래핑함
 */
export class ApplicationError extends Error {
  code: ErrorCode;
  details: { [key: string]: string };

  constructor(code: ErrorCode, message: string, details: { [key: string]: string } = {}) {
    super(message);
    this.code = code;
    this.details = details;
    // Set the prototype explicitly to allow instanceof checks to work correctly if targeting ES5
    Object.setPrototypeOf(this, ApplicationError.prototype);
  }

  static fromProto(error: ProtoError): ApplicationError {
    return new ApplicationError(error.code, error.message, error.details);
  }
}

/**
 * 에러를 정규화하여 ApplicationError로 변환
 */
export const handleConnectError = (error: unknown): ApplicationError => {
  if (error instanceof ApplicationError) {
    return error;
  }

  if (error instanceof ConnectError) {
    // 네트워크 에러 등을 SYSTEM_ERROR로 매핑
    return new ApplicationError(ErrorCode.SYSTEM_ERROR, error.message);
  }

  if (error instanceof Error) {
    return new ApplicationError(
      ErrorCode.INTERNAL,
      error.message || '알 수 없는 오류가 발생했습니다'
    );
  }

  return new ApplicationError(ErrorCode.UNSPECIFIED, '알 수 없는 오류가 발생했습니다');
};

export function unwrap<T>(response: {
  result:
    | { case: 'success'; value: T }
    | { case: 'error'; value: ProtoError }
    | { case: undefined };
}): NonNullable<T> {
  if (response.result.case === 'error') {
    throw ApplicationError.fromProto(response.result.value);
  }
  if (response.result.case === 'success') {
    return response.result.value as NonNullable<T>;
  }
  throw new ApplicationError(ErrorCode.INTERNAL, 'Unknown response result');
}
