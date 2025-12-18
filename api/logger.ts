import type { DescMessage } from '@bufbuild/protobuf';
import { toJsonString } from '@bufbuild/protobuf';
import type { UnaryRequest, UnaryResponse } from '@connectrpc/connect';
import { ConnectError } from '@connectrpc/connect';

const isDev = __DEV__;

interface LogData {
  [key: string]: unknown;
}

class ApiLogger {
  private safeStringify(data: unknown): string {
    try {
      return JSON.stringify(data, null, 2);
    } catch {
      return String(data);
    }
  }

  private log(level: 'log' | 'error', message: string, data?: LogData) {
    if (!isDev && level !== 'error') {
      return;
    }

    const logData = data ? `\n${this.safeStringify(data)}` : '';
    if (level === 'error') {
      console.error(message + logData);
    } else {
      console.log(message + logData);
    }
  }

  logConnectRequest(req: UnaryRequest<DescMessage, DescMessage>) {
    const serviceName = req.service.typeName;
    const methodName = req.method.name;
    const logData: LogData = {};

    if (req.message) {
      const method = req.method;
      const jsonString = toJsonString(method.input, req.message);
      logData.message = JSON.parse(jsonString);
    }

    this.log('log', `[RPC Request] ${serviceName}/${methodName}`, logData);
  }

  logConnectResponse(
    req: UnaryRequest<DescMessage, DescMessage>,
    res: UnaryResponse<DescMessage, DescMessage>
  ) {
    const serviceName = req.service.typeName;
    const methodName = req.method.name;
    const logData: LogData = {};

    if (res.message) {
      const method = req.method;
      const jsonString = toJsonString(method.output, res.message);
      logData.message = JSON.parse(jsonString);
    }

    this.log('log', `[RPC Response] ${serviceName}/${methodName}`, logData);
  }

  logConnectError(req: UnaryRequest<DescMessage, DescMessage>, error: unknown) {
    const serviceName = req.service.typeName;
    const methodName = req.method.name;
    const logData: LogData = {};

    if (error instanceof ConnectError) {
      logData.code = error.code;
      logData.message = error.message;
      logData.rawMessage = error.rawMessage;
    } else if (error instanceof Error) {
      logData.message = error.message;
    }

    this.log('error', `[RPC Error] ${serviceName}/${methodName}`, logData);
  }
}

export const apiLogger = new ApiLogger();
