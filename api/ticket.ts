import { create } from '@bufbuild/protobuf';

import { GetMyTicketsRequestSchema } from '@/gen/duologue/v1/ticket_pb';
import { MyTickets } from '@/models/ticket';

import { handleConnectError } from './connectError';
import { mapTicket } from './mappers';
import { ticketClient } from './transport';

export const ticketApi = {
  getMyTickets: async (): Promise<MyTickets> => {
    try {
      const request = create(GetMyTicketsRequestSchema, {});
      const response = await ticketClient.getMyTickets(request);

      return {
        matchTicket: mapTicket(response.matchTicket),
        gameTicket: mapTicket(response.gameTicket),
        continueTicket: mapTicket(response.continueTicket),
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },
};
