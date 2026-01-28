import { ConnectError } from '@connectrpc/connect';

import { Error as ProtoError, ErrorCode, ErrorSchema } from '../gen/duologue/v1/common_pb';

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
    // 1. HTTP 상태 코드로 기본적인 에러 매핑 (필요시)
    // console.log("HTTP Code:", error.code);

    // 2. 애플리케이션 에러 코드 추출
    const details = error.findDetails(ErrorSchema);
    const [protoError] = details;

    if (protoError) {
      return ApplicationError.fromProto(protoError);
    }

    // ConnectError지만 상세 정보가 없는 경우 (네트워크 에러 등)
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
