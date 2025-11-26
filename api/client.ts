import axios from 'axios';

import { convertKeysToCamelCase, convertKeysToSnakeCase } from '@/utils/caseConverter';

import { apiLogger } from './logger';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('EXPO_PUBLIC_API_URL is not defined in environment variables');
}

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    apiLogger.logRequest(config);

    // Convert request body to snake_case
    if (config.data) {
      config.data = convertKeysToSnakeCase(config.data);
    }

    return config;
  },
  (error) => {
    apiLogger.logError(error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    apiLogger.logResponse(response);

    // Convert response data to camelCase
    if (response.data) {
      response.data = convertKeysToCamelCase(response.data);
    }

    return response;
  },
  (error) => {
    apiLogger.logError(error);
    return Promise.reject(error);
  }
);
