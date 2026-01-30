import { useQuery } from '@tanstack/react-query';

import { ticketApi } from '@/api/ticket';
import type { MyTickets } from '@/models/ticket';
import { GetQueryOption, QueryOptionParams } from '@/types/query';

export const getQueryOptionTickets: GetQueryOption<MyTickets, Error> = (options) => {
  return {
    queryKey: ['tickets'],
    queryFn: () => ticketApi.getMyTickets(),
    staleTime: 0,
    ...options,
  };
};

export const useQueryTickets = (options?: QueryOptionParams<MyTickets, Error>) => {
  return useQuery(getQueryOptionTickets(options));
};
