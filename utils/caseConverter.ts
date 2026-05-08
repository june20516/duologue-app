export const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

export const toSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export const convertKeysToCamelCase = <T = unknown>(obj: unknown): T => {
  if (obj === null || obj === undefined) {
    return obj as T;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item)) as T;
  }

  if (typeof obj === 'object' && obj.constructor === Object) {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[toCamelCase(key)] = convertKeysToCamelCase(value);
    }
    return result as T;
  }

  return obj as T;
};

export const convertKeysToSnakeCase = <T = unknown>(obj: unknown): T => {
  if (obj === null || obj === undefined) {
    return obj as T;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToSnakeCase(item)) as T;
  }

  if (typeof obj === 'object' && obj.constructor === Object) {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[toSnakeCase(key)] = convertKeysToSnakeCase(value);
    }
    return result as T;
  }

  return obj as T;
};
