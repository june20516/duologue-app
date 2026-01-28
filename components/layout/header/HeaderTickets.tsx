import { Image } from 'expo-image';
import { XStack } from 'tamagui';

import { useQueryTickets } from '@/queries/useQueryTicket';

import Typography from '../../ui/Typography';

import { TICKET_ICON_SIZE } from './contstants';

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
    <XStack gap="$4" px="$3" items="center">
      <XStack gap="$1" items="center">
        <Image
          source={require('@/assets/images/ticket-match-simple-small.png')}
          style={{
            width: TICKET_ICON_SIZE,
            height: TICKET_ICON_SIZE,
            transform: [{ rotate: '30deg' }],
          }}
          contentFit="contain"
        />
        <Typography type="caption">
          {data.matchTicket.quantity}/{data.matchTicket.maxQuantity}
        </Typography>
      </XStack>

      <XStack gap="$1" items="center">
        <Image
          source={require('@/assets/images/ticket-game-simple-small.png')}
          style={{
            width: TICKET_ICON_SIZE,
            height: TICKET_ICON_SIZE,
            transform: [{ rotate: '30deg' }],
          }}
          contentFit="contain"
        />
        <Typography type="caption">
          {data.gameTicket.quantity}/{data.gameTicket.maxQuantity}
        </Typography>
      </XStack>

      <XStack gap="$1" items="center">
        <Image
          source={require('@/assets/images/ticket-life-simple-small.png')}
          style={{
            width: TICKET_ICON_SIZE,
            height: TICKET_ICON_SIZE,
            transform: [{ rotate: '30deg' }],
          }}
          contentFit="contain"
        />
        <Typography type="caption">
          {data.continueTicket.quantity}/{data.continueTicket.maxQuantity}
        </Typography>
      </XStack>
    </XStack>
  );
};
