import { useQuery } from '@tanstack/react-query';

import { interestApi } from '@/api/interest';
import { Interest } from '@/models/user';
import { GetQueryOption, QueryOptionParams } from '@/types/query';

const STALE_TIME = 1000 * 60 * 60; // 1 hour

export const getQueryOptionInterests: GetQueryOption<Interest[], Error> = (options) => {
  return {
    queryKey: ['interests'],
    queryFn: () => interestApi.getAll(),
    staleTime: STALE_TIME,
    ...options,
  };
};

export const useQueryInterests = (options?: QueryOptionParams<Interest[], Error>) => {
  return useQuery(getQueryOptionInterests(options));
};
