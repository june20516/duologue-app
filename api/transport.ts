import { createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';

import { AuthService } from '@/gen/duologue/v1/auth_pb';
import { InterestService } from '@/gen/duologue/v1/interest_pb';
import { ProfileService } from '@/gen/duologue/v1/profile_pb';
import { TicketService } from '@/gen/duologue/v1/ticket_pb';

import { createAuthInterceptor, createLoggingInterceptor } from './interceptors';

const API_URL = process.env.EXPO_PUBLIC_SERVER_URL;

if (!API_URL) {
  throw new Error('EXPO_PUBLIC_SERVER_URL is not defined in environment variables');
}

const transport = createConnectTransport({
  baseUrl: API_URL,
  interceptors: [createLoggingInterceptor(), createAuthInterceptor()],
});

export const authClient = createClient(AuthService, transport);
export const profileClient = createClient(ProfileService, transport);
export const interestClient = createClient(InterestService, transport);
export const ticketClient = createClient(TicketService, transport);
