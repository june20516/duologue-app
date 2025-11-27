export interface BaseUser {
  id: number;
  email: string;
  createdAt: string;
  lastLoginAt: string;
  status: string;
  updatedAt: string;
}

export interface Interest {
  id: number;
  key: string;
  displayName: string;
  categoryKey: string;
  categoryDisplayName: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthMe extends BaseUser {}

export interface ProfileMe {
  userId: number;
  nickname: string | null;
  gender: 'male' | 'female' | 'other' | null;
  region: string | null;
  shortBio: string | null;
  profileImageUrl: string | null;
  exp: number;
  level: number;
  interests: Interest[];
  createdAt: string;
  updatedAt: string;
}

export interface Me extends AuthMe, ProfileMe {
  profileComplete: boolean;
}

export interface Player {
  id: string;
  nickname: string;
  profileImage?: string;
  gender: 'male' | 'female' | 'other';
  bio?: string;
  interests: string[];
  location?: string;
}
