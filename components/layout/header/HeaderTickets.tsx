import { Image } from 'expo-image';
import { XStack } from 'tamagui';

import { Spinner } from '@/components/ui';
import { Ticket } from '@/models/ticket';
import { useQueryTickets } from '@/queries/useQueryTicket';

import Typography from '../../ui/Typography';

import { TICKET_ICON_SIZE } from './contstants';

export const HeaderTickets: React.FC = () => {
  const { data, isLoading, isError } = useQueryTickets();

  return (
    <XStack gap="$4" px="$3" items="center">
      <XStack gap="$2" items="center">
        <Image
          source={require('@/assets/images/ticket-match-simple-small.png')}
          style={{
            width: TICKET_ICON_SIZE,
            height: TICKET_ICON_SIZE,
            transform: [{ rotate: '30deg' }],
          }}
          contentFit="contain"
        />
        <TicketTypo isLoading={isLoading} isError={isError} data={data?.matchTicket} />
      </XStack>

      <XStack gap="$2" items="center">
        <Image
          source={require('@/assets/images/ticket-game-simple-small.png')}
          style={{
            width: TICKET_ICON_SIZE,
            height: TICKET_ICON_SIZE,
            transform: [{ rotate: '30deg' }],
          }}
          contentFit="contain"
        />
        <TicketTypo isLoading={isLoading} isError={isError} data={data?.gameTicket} />
      </XStack>

      <XStack gap="$2" items="center">
        <Image
          source={require('@/assets/images/ticket-life-simple-small.png')}
          style={{
            width: TICKET_ICON_SIZE,
            height: TICKET_ICON_SIZE,
            transform: [{ rotate: '30deg' }],
          }}
          contentFit="contain"
        />
        <TicketTypo isLoading={isLoading} isError={isError} data={data?.continueTicket} />
      </XStack>
    </XStack>
  );
};

const TicketTypo = ({
  isLoading,
  isError,
  data,
}: {
  isLoading: boolean;
  isError?: boolean;
  data?: Ticket;
}) => {
  if (isLoading) {
    return <Spinner color="$secondary" size="small" />;
  }

  if (isError || !data) {
    return <Typography type="caption">- / -</Typography>;
  }

  return (
    <Typography type="caption">
      {data?.quantity} / {data?.maxQuantity}
    </Typography>
  );
};
