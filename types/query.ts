import { UseQueryOptions } from '@tanstack/react-query';

export type QueryOptionParams<T, E> = Omit<UseQueryOptions<T, E>, 'queryKey' | 'queryFn'>;
export type GetQueryOption<T, E> = (options?: QueryOptionParams<T, E>) => UseQueryOptions<T, E>;
