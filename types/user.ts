export interface BaseUser {
  id: string;
  email: string;
  createdAt: string;
}

export interface Me extends BaseUser {
  profileComplete: boolean;
}

export interface OtherUser {
  id: string;
  nickname: string;
  profileImage?: string;
  gender: 'male' | 'female' | 'other';
  bio?: string;
  interests: string[];
  location?: string;
}
