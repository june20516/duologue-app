import { Gender as ProtoGender } from '@/gen/duologue/v1/common_pb';
import type { Interest as ProtoInterest } from '@/gen/duologue/v1/interest_pb';
import type { Profile as ProtoProfile } from '@/gen/duologue/v1/profile_pb';
import type { Ticket as ProtoTicket } from '@/gen/duologue/v1/ticket_pb';
import type { Ticket } from '@/models/ticket';
import type { Interest, ProfileMe } from '@/models/user';
import type { Gender } from '@/types/gender';

export const protoGenderToGender = (protoGender: ProtoGender): Gender | null => {
  switch (protoGender) {
    case ProtoGender.MALE:
      return 'male';
    case ProtoGender.FEMALE:
      return 'female';
    case ProtoGender.OTHERS:
      return 'others';
    case ProtoGender.UNSPECIFIED:
      return null;
    default:
      return null;
  }
};

export const genderToProtoGender = (gender: Gender | null | undefined): ProtoGender => {
  if (!gender) {
    return ProtoGender.UNSPECIFIED;
  }

  switch (gender) {
    case 'male':
      return ProtoGender.MALE;
    case 'female':
      return ProtoGender.FEMALE;
    case 'others':
      return ProtoGender.OTHERS;
    default:
      return ProtoGender.UNSPECIFIED;
  }
};

export const mapInterest = (interest: ProtoInterest): Interest => ({
  id: interest.id,
  key: interest.key,
  displayName: interest.displayName,
  categoryKey: interest.categoryKey,
  categoryDisplayName: interest.categoryDisplayName,
});

export const mapProfile = (profile: ProtoProfile): ProfileMe => ({
  userId: Number(profile.userId),
  nickname: profile.nickname ?? null,
  gender: protoGenderToGender(profile.gender),
  region: profile.region ?? null,
  shortBio: profile.shortBio ?? null,
  profileImageUrl: profile.profileImageUrl ?? null,
  exp: 0,
  level: profile.level,
  interests: profile.interests.map(mapInterest),
});

export const mapTicket = (ticket: ProtoTicket | undefined): Ticket => {
  if (!ticket) {
    return {
      quantity: 0,
      maxQuantity: 0,
      lastRefillAt: null,
    };
  }

  return {
    quantity: ticket.quantity,
    maxQuantity: ticket.maxQuantity,
    lastRefillAt: ticket.lastRefillAt ? new Date(Number(ticket.lastRefillAt.seconds) * 1000) : null,
  };
};
