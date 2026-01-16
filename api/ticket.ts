import { create } from '@bufbuild/protobuf';

import { GetMyTicketsRequestSchema } from '@/gen/duologue/v1/ticket_pb';
import { MyTickets } from '@/models/ticket';

import { handleConnectError, unwrap } from './connectError';
import { mapTicket } from './mappers';
import { ticketClient } from './transport';

export const ticketApi = {
  getMyTickets: async (): Promise<MyTickets> => {
    try {
      const request = create(GetMyTicketsRequestSchema, {});
      const response = await ticketClient.getMyTickets(request);
      const result = unwrap(response);

      return {
        matchTicket: mapTicket(result.matchTicket),
        gameTicket: mapTicket(result.gameTicket),
        continueTicket: mapTicket(result.continueTicket),
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },
};
