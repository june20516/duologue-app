import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

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

  logRequest(config: InternalAxiosRequestConfig) {
    const { method, url, params, data } = config;
    const logData: LogData = {};

    if (params) {
      logData.params = params;
    }

    if (data) {
      try {
        logData.data = typeof data === 'string' ? JSON.parse(data) : data;
      } catch {
        logData.data = data;
      }
    }

    this.log('log', `[API Request] ${method?.toUpperCase()} ${url}`, logData);
  }

  logResponse(response: AxiosResponse) {
    const { config, status, data } = response;
    const logData: LogData = {
      status,
    };

    // Response body를 안전하게 복사
    if (data !== undefined) {
      try {
        logData.data = typeof data === 'string' ? JSON.parse(data) : { ...data };
      } catch {
        logData.data = data;
      }
    }

    this.log('log', `[API Response] ${config.method?.toUpperCase()} ${config.url}`, logData);
  }

  logError(error: AxiosError) {
    const { config, response, message } = error;
    const logData: LogData = {
      message,
    };

    if (response) {
      logData.status = response.status;

      // Error response body를 안전하게 복사
      if (response.data !== undefined) {
        try {
          logData.data =
            typeof response.data === 'string' ? JSON.parse(response.data) : { ...response.data };
        } catch {
          logData.data = response.data;
        }
      }
    }

    this.log(
      'error',
      `[API Error] ${config?.method?.toUpperCase()} ${config?.url || 'unknown'}`,
      logData
    );
  }
}

export const apiLogger = new ApiLogger();
