import { XStack } from 'tamagui';

import { useQueryTickets } from '@/queries/useQueryTicket';

import Typography from '../ui/Typography';

export const HeaderTickets: React.FC = () => {
  const { data, isLoading, isError } = useQueryTickets();

  if (isLoading) {
    return (
      <XStack gap="$2" px="$3">
        <Typography type="caption">...</Typography>
      </XStack>
    );
  }

  if (isError || !data) {
    return (
      <XStack gap="$2" px="$3">
        <Typography type="caption">? / ?</Typography>
      </XStack>
    );
  }

  return (
    <XStack gap="$3" px="$3">
      <Typography type="caption">
        🎫 {data.matchTicket.quantity}/{data.matchTicket.maxQuantity}
      </Typography>
      <Typography type="caption">
        🎮 {data.gameTicket.quantity}/{data.gameTicket.maxQuantity}
      </Typography>
      <Typography type="caption">
        ➕ {data.continueTicket.quantity}/{data.continueTicket.maxQuantity}
      </Typography>
    </XStack>
  );
};
