import { useQuery } from '@tanstack/react-query';

import { getQueryOptionProfileMe } from './useQueryAuth';

export const useQueryProfileMe = () => {
  return useQuery(getQueryOptionProfileMe());
};
