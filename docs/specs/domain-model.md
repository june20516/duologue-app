# Duologue 도메인 모델 (프론트엔드)

> 작성일: 2025-11-19
> 버전: 1.0
> 기반: [백엔드 도메인 모델](./backend-domain-model.md)

## 개요

Duologue 앱의 프론트엔드 관점에서의 도메인 모델을 정의한 문서입니다.
백엔드 API 응답을 기반으로 클라이언트에서 관리할 상태, 컴포넌트 구조, 데이터 흐름을 정의합니다.

### 기술 스택

- **프레임워크**: React Native + Expo
- **라우팅**: Expo Router (파일 기반 라우팅)
- **상태 관리**: Zustand (글로벌 상태)
- **서버 상태**: React Query (API 캐싱 및 동기화)
- **API 클라이언트**: Axios
- **UI 라이브러리**: Tamagui
- **실시간 통신**: TBD (WebSocket/Socket.io)

---

## 핵심 도메인 (클라이언트 관점)

### A. 인증 및 사용자 도메인

#### A.1. AuthState (인증 상태)

**역할**: 사용자의 로그인 상태 및 토큰 관리

**클라이언트 상태 (Zustand)**:
```typescript
interface AuthState {
  // 토큰
  accessToken: string | null;
  refreshToken: string | null;

  // 사용자 기본 정보
  user: User | null;

  // 상태
  isAuthenticated: boolean;
  isLoading: boolean;

  // 액션
  setTokens: (access: string, refresh: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}
```

**API 엔드포인트**:
- `POST /api/v1/auth/request-signup` - 회원가입 인증 코드 요청
- `POST /api/v1/auth/verify-signup` - 인증 코드 검증 및 회원가입
- `POST /api/v1/auth/request-login` - 로그인 코드 요청
- `POST /api/v1/auth/verify-login` - 로그인 코드 검증
- `POST /api/v1/auth/refresh` - 토큰 갱신
- `POST /api/v1/auth/logout` - 로그아웃
- `GET /api/v1/auth/me` - 현재 사용자 정보

**화면 플로우**:
1. `/auth/email-input` - 이메일 입력
2. `/auth/code-verify` - 인증 코드 입력
3. `/auth/profile-setup` (회원가입 후) - 프로필 설정
4. `/(tabs)` - 메인 화면

---

#### A.2. User (사용자)

**타입 정의**:
```typescript
interface User {
  id: string;
  email: string;
  createdAt: string;
  lastLoginAt: string;
  status: 'active' | 'suspended' | 'deleted';
}
```

**데이터 소스**:
- API: `GET /api/v1/auth/me`
- 캐시: React Query (`['user', 'me']`)

---

#### A.3. Profile (프로필)

**타입 정의**:
```typescript
interface Profile {
  userId: string;

  // 기본 프로필 (항상 보임)
  nickname: string;
  profileImageUrl: string;
  gender: 'male' | 'female' | 'other';
  shortBio: string;
  interests: string[];
  region: string;

  // 상세 프로필 (친밀함 상태에서만)
  bio?: string;
  realName?: string;
  age?: number;
  occupation?: string;
  affiliation?: string;
  school?: string;
  mediaUrls?: string[];
  socialAccounts?: Record<string, string>;

  // 시스템 정보
  level: number;
  exp: number;
}
```

**API 엔드포인트**:
- `GET /api/v1/profiles/me` - 내 프로필 조회
- `PATCH /api/v1/profiles/me` - 프로필 수정
- `GET /api/v1/profiles/:id` - 타인 프로필 조회 (기본 정보)
- `GET /api/v1/profiles/:id?level=intimate` - 상세 프로필 조회 (친밀함 상태)

**React Query 키**:
- `['profile', 'me']` - 내 프로필
- `['profile', userId]` - 특정 사용자 프로필
- `['profile', userId, 'intimate']` - 친밀함 상태 프로필

**화면**:
- `/profile/me` - 내 프로필 화면
- `/profile/edit` - 프로필 수정
- `/profile/[id]` - 타인 프로필 상세

---

#### A.4. MatchPreset (매칭 조건 프리셋)

**타입 정의**:
```typescript
interface MatchPreset {
  id: string;
  userId: string;
  name: string;
  genderPreference: 'male' | 'female' | 'any';
  minAge: number;
  maxAge: number;
  interests: string[];
  isDefault: boolean;
}
```

**클라이언트 상태**: 필요 시 React Query로 관리

**API 엔드포인트**:
- `GET /api/v1/match-presets` - 프리셋 목록
- `POST /api/v1/match-presets` - 프리셋 생성
- `PATCH /api/v1/match-presets/:id` - 프리셋 수정
- `DELETE /api/v1/match-presets/:id` - 프리셋 삭제

**화면**:
- `/match/preset` - 매칭 조건 설정

---

### B. 매칭 도메인

#### B.1. Match (매칭)

**타입 정의**:
```typescript
interface Match {
  id: string;
  userA: User;
  userB: User;
  status: 'matched' | 'active' | 'closed';
  isIntimate: boolean;
  createdAt: string;
  updatedAt: string;

  // 관계 데이터 (include 쿼리로 가져옴)
  playCount?: number;
  lastPlay?: Play;
  chatRoom?: ChatRoom;
  conditions?: [MatchCondition, MatchCondition];
}
```

**클라이언트 상태 (Zustand)**:
```typescript
interface MatchState {
  // 매칭 대기 상태
  isWaitingForMatch: boolean;
  matchQueueId: string | null;

  // 액션
  startMatching: (preset?: MatchPreset) => Promise<void>;
  cancelMatching: () => void;
}
```

**API 엔드포인트**:
- `POST /api/v1/matches` - 매칭 요청
- `GET /api/v1/matches?include=profile,play_count` - 매칭 목록
- `GET /api/v1/matches/:id` - 매칭 상세
- `PATCH /api/v1/matches/:id/reject` - 매칭 거절
- `DELETE /api/v1/matches/:id` - 매칭 삭제

**WebSocket**:
- `/ws/matching` - 매칭 대기열 상태 수신

**React Query 키**:
- `['matches']` - 매칭 목록
- `['matches', matchId]` - 특정 매칭
- `['matches', matchId, 'plays']` - 매칭의 플레이 기록

**화면**:
- `/(tabs)/match` - 매칭 메인 (새 매칭 시작)
- `/match/waiting` - 매칭 대기 화면
- `/match/[id]` - 매칭 상세
- `/match/history` - 매칭 히스토리

**프로필 블러 처리 로직**:
```typescript
function getProfileImage(match: Match, currentUserId: string): string {
  const partner = match.userA.id === currentUserId ? match.userB : match.userA;

  if (match.status === 'matched') {
    // 새 매칭: 블러 처리된 이미지
    return applyBlur(partner.profileImageUrl);
  } else {
    // 매칭 기록: 블러 해제
    return partner.profileImageUrl;
  }
}
```

---

### C. 게임 도메인

#### C.1. Game (게임 종류)

**타입 정의**:
```typescript
interface Game {
  id: string;
  code: 'spot_the_difference' | 'raft' | 'pelmanism' | 'crossing';
  name: string;
  description: string;
  requiresVoice: boolean;
  isActive: boolean;
}
```

**API 엔드포인트**:
- `GET /api/v1/games` - 게임 목록

**화면**:
- `/game/select` - 게임 선택 화면

---

#### C.2. Play (플레이 기록)

**타입 정의**:
```typescript
interface Play {
  id: string;
  matchId: string;
  gameId: string;
  game?: Game;
  userA: User;
  userB: User;
  startedAt: string;
  endedAt?: string;
  result?: 'success' | 'fail' | 'abandoned';
  score?: number;
  gameData?: Record<string, any>;
  isReplayable: boolean;
}
```

**클라이언트 상태 (Zustand)**:
```typescript
interface GameState {
  // 현재 게임 세션
  currentPlay: Play | null;
  isPlaying: boolean;

  // WebSocket 연결
  gameSocket: WebSocket | null;

  // 액션
  startGame: (matchId: string, gameId: string) => Promise<void>;
  endGame: (result: GameResult) => Promise<void>;
  connectGameSocket: (playId: string) => void;
  disconnectGameSocket: () => void;
}
```

**API 엔드포인트**:
- `POST /api/v1/matches/:matchId/play` - 게임 시작
- `PATCH /api/v1/plays/:id/result` - 게임 결과 저장
- `GET /api/v1/matches/:matchId/plays` - 플레이 기록

**WebSocket**:
- `/ws/game/:playId` - 게임 실시간 통신

**화면**:
- `/game/play/[playId]` - 게임 플레이 화면
- `/game/result` - 게임 결과 화면

---

### D. 티켓 도메인

#### D.1. Tickets (티켓 통합)

**타입 정의**:
```typescript
interface Tickets {
  matchTicket: {
    quantity: number;
    maxQuantity: number;
    lastRefillAt: string;
  };
  gameTicket: {
    quantity: number;
    maxQuantity: number;
    lastRefillAt: string;
  };
  continueTicket: {
    quantity: number;
    maxQuantity: number;
    lastRefillAt: string;
  };
}
```

**클라이언트 상태 (Zustand)**:
```typescript
interface TicketState {
  tickets: Tickets | null;

  // 액션
  fetchTickets: () => Promise<void>;
  consumeMatchTicket: () => void;
  consumeGameTicket: () => void;
  consumeContinueTicket: () => void;
}
```

**API 엔드포인트**:
- `GET /api/v1/tickets` - 모든 티켓 조회

**React Query 키**:
- `['tickets']` - 티켓 정보

**화면**:
- 모든 화면의 헤더에 티켓 수량 표시
- `/store` - 티켓 구매 화면

---

### E. 소셜 도메인

#### E.1. ChatRoom (대화방)

**타입 정의**:
```typescript
interface ChatRoom {
  id: string;
  matchId: string;
  status: 'active' | 'closed';
  createdAt: string;

  // 관계 데이터
  messages?: ChatMessage[];
  match?: Match;
}
```

**API 엔드포인트**:
- `POST /api/v1/matches/:matchId/chat-room` - 채팅방 생성
- `GET /api/v1/chat-rooms/:id/messages` - 메시지 조회
- `POST /api/v1/chat-rooms/:id/messages` - 메시지 전송

**WebSocket**:
- `/ws/chat/:roomId` - 실시간 채팅

**화면**:
- `/chat/[roomId]` - 채팅 화면

---

#### E.2. GameAppointment (게임 약속)

**타입 정의**:
```typescript
interface GameAppointment {
  id: string;
  matchId: string;
  proposer: User;
  receiver: User;
  ticketProvider?: User;
  currentProposedTime: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';
  createdAt: string;

  // 관계 데이터
  history?: GameAppointmentHistory[];
}

interface GameAppointmentHistory {
  id: string;
  appointmentId: string;
  actor: User;
  actionType: 'initial_propose' | 'modify_time' | 'accept' | 'reject' | 'cancel';
  proposedTime?: string;
  message?: string;
  createdAt: string;
}
```

**API 엔드포인트**:
- `POST /api/v1/matches/:matchId/game-appointments` - 약속 제안
- `GET /api/v1/game-appointments` - 내 약속 목록
- `PATCH /api/v1/game-appointments/:id/respond` - 약속 응답
- `PATCH /api/v1/game-appointments/:id/cancel` - 약속 취소

**화면**:
- `/appointment/create` - 약속 생성
- `/appointment/[id]` - 약속 상세 및 응답

---

### F. 상거래 도메인

#### F.1. Order (주문)

**타입 정의**:
```typescript
interface Order {
  id: string;
  userId: string;
  orderType: 'match_ticket' | 'game_ticket' | 'continue_ticket';
  quantity: number;
  price: number;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  orderedAt: string;
  completedAt?: string;
}
```

**API 엔드포인트**:
- `POST /api/v1/orders` - 주문 생성
- `GET /api/v1/orders` - 주문 목록
- `POST /api/v1/orders/:id/pay` - 결제 처리

**화면**:
- `/store` - 상점 (티켓 구매)
- `/store/payment` - 결제
- `/store/history` - 구매 내역

---

## 화면 구조 (Expo Router)

```
app/
├── _layout.tsx                    # 루트 레이아웃 (인증 체크)
├── index.tsx                      # 시작 화면 (리다이렉트)
│
├── auth/                          # 인증 플로우
│   ├── email-input.tsx           # 이메일 입력
│   ├── code-verify.tsx           # 인증 코드 입력
│   └── profile-setup.tsx         # 프로필 설정 (회원가입 후)
│
├── (tabs)/                        # 메인 탭 네비게이션
│   ├── _layout.tsx               # 탭 레이아웃
│   ├── index.tsx                 # 홈 (매칭 히스토리)
│   ├── match.tsx                 # 새 매칭
│   ├── chat.tsx                  # 채팅 목록
│   └── profile.tsx               # 내 프로필
│
├── match/                         # 매칭 관련
│   ├── waiting.tsx               # 매칭 대기
│   ├── [id].tsx                  # 매칭 상세
│   └── preset.tsx                # 조건 설정
│
├── game/                          # 게임 관련
│   ├── select.tsx                # 게임 선택
│   ├── play/
│   │   └── [playId].tsx         # 게임 플레이
│   └── result.tsx                # 게임 결과
│
├── chat/                          # 채팅
│   └── [roomId].tsx              # 채팅방
│
├── appointment/                   # 게임 약속
│   ├── create.tsx                # 약속 생성
│   └── [id].tsx                  # 약속 상세
│
├── profile/                       # 프로필
│   ├── edit.tsx                  # 프로필 수정
│   └── [id].tsx                  # 타인 프로필
│
└── store/                         # 상점
    ├── index.tsx                 # 상점 메인
    ├── payment.tsx               # 결제
    └── history.tsx               # 구매 내역
```

---

## 클라이언트 상태 관리 전략

### 1. Zustand (글로벌 상태)

**사용 대상**:
- 인증 상태 (`authStore`)
- 티켓 정보 (`ticketStore`)
- 현재 게임 세션 (`gameStore`)
- 매칭 대기 상태 (`matchStore`)

**예시**:
```typescript
// stores/authStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  isAuthenticated: boolean;

  setTokens: (access: string, refresh: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      isAuthenticated: false,

      setTokens: (access, refresh) => set({
        accessToken: access,
        refreshToken: refresh,
        isAuthenticated: true,
      }),

      setUser: (user) => set({ user }),

      logout: () => set({
        accessToken: null,
        refreshToken: null,
        user: null,
        isAuthenticated: false,
      }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

---

### 2. React Query (서버 상태)

**사용 대상**:
- 프로필 데이터
- 매칭 목록
- 게임 목록
- 채팅 메시지
- 주문 내역

**설정**:
```typescript
// lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      gcTime: 1000 * 60 * 30,   // 30분 (구 cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
```

**커스텀 훅 예시**:
```typescript
// hooks/useMatches.ts
import { useQuery } from '@tanstack/react-query';
import { getMatches } from '@/api/match';

export function useMatches() {
  return useQuery({
    queryKey: ['matches'],
    queryFn: () => getMatches({ include: ['profile', 'play_count'] }),
  });
}

export function useMatch(matchId: string) {
  return useQuery({
    queryKey: ['matches', matchId],
    queryFn: () => getMatch(matchId),
    enabled: !!matchId,
  });
}
```

---

### 3. WebSocket 상태

**실시간 기능**:
- 매칭 대기열 (`/ws/matching`)
- 게임 플레이 (`/ws/game/:playId`)
- 채팅 (`/ws/chat/:roomId`)

**훅 예시**:
```typescript
// hooks/useGameSocket.ts
import { useEffect, useRef } from 'react';
import { useGameStore } from '@/stores/gameStore';

export function useGameSocket(playId: string | null) {
  const socketRef = useRef<WebSocket | null>(null);
  const { setGameEvent } = useGameStore();

  useEffect(() => {
    if (!playId) return;

    // WebSocket 연결
    const ws = new WebSocket(`${WS_URL}/game/${playId}`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setGameEvent(data);
    };

    socketRef.current = ws;

    return () => {
      ws.close();
    };
  }, [playId]);

  return socketRef.current;
}
```

---

## API 클라이언트 구조

```typescript
// lib/api.ts
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8080/api/v1',
  timeout: 10000,
});

// Request 인터셉터: 토큰 추가
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response 인터셉터: 토큰 갱신
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = useAuthStore.getState().refreshToken;
        const { data } = await axios.post('/auth/refresh', { refreshToken });

        useAuthStore.getState().setTokens(data.accessToken, data.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().logout();
        // 로그인 화면으로 리다이렉트
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
```

```typescript
// api/match.ts
import api from '@/lib/api';
import type { Match, MatchPreset } from '@/types';

export const matchApi = {
  // 매칭 요청
  requestMatch: (presetId?: string) =>
    api.post<Match>('/matches', { presetId }),

  // 매칭 목록
  getMatches: (params?: { include?: string[] }) =>
    api.get<Match[]>('/matches', { params }),

  // 매칭 상세
  getMatch: (id: string) =>
    api.get<Match>(`/matches/${id}`),

  // 매칭 거절
  rejectMatch: (id: string) =>
    api.patch(`/matches/${id}/reject`),

  // 매칭 삭제
  deleteMatch: (id: string) =>
    api.delete(`/matches/${id}`),
};
```

---

## 주요 비즈니스 플로우 (클라이언트 관점)

### 플로우 1: 회원가입

```typescript
// screens/auth/EmailInput.tsx
function EmailInputScreen() {
  const [email, setEmail] = useState('');
  const { mutate: requestSignup } = useMutation({
    mutationFn: (email: string) => authApi.requestSignup(email),
    onSuccess: () => {
      router.push(`/auth/code-verify?email=${email}&type=signup`);
    },
  });

  return (
    <View>
      <Input value={email} onChangeText={setEmail} />
      <Button onPress={() => requestSignup(email)}>
        인증 코드 전송
      </Button>
    </View>
  );
}

// screens/auth/CodeVerify.tsx
function CodeVerifyScreen() {
  const { email, type } = useLocalSearchParams();
  const { setTokens, setUser } = useAuthStore();

  const { mutate: verifyCode } = useMutation({
    mutationFn: (code: string) =>
      type === 'signup'
        ? authApi.verifySignup(email, code)
        : authApi.verifyLogin(email, code),
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
      setUser(data.user);

      if (type === 'signup') {
        router.replace('/auth/profile-setup');
      } else {
        router.replace('/(tabs)');
      }
    },
  });

  return <CodeInput onComplete={verifyCode} />;
}
```

---

### 플로우 2: 매칭 요청 및 대기

```typescript
// screens/match/index.tsx
function MatchScreen() {
  const { startMatching, isWaitingForMatch } = useMatchStore();
  const { data: presets } = useQuery({
    queryKey: ['match-presets'],
    queryFn: matchApi.getPresets,
  });

  const handleStartMatch = async () => {
    await startMatching(presets?.[0]);
    router.push('/match/waiting');
  };

  return (
    <View>
      <Button onPress={handleStartMatch} disabled={isWaitingForMatch}>
        매칭 시작
      </Button>
    </View>
  );
}

// screens/match/waiting.tsx
function WaitingScreen() {
  const { cancelMatching } = useMatchStore();
  const [matchResult, setMatchResult] = useState<Match | null>(null);

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}/matching`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'MATCH_FOUND') {
        setMatchResult(data.match);
        router.replace(`/match/${data.match.id}`);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <View>
      <Text>매칭 대기 중...</Text>
      <Button onPress={cancelMatching}>취소</Button>
    </View>
  );
}
```

---

### 플로우 3: 게임 플레이

```typescript
// screens/game/play/[playId].tsx
function GamePlayScreen() {
  const { playId } = useLocalSearchParams();
  const { data: play } = useQuery({
    queryKey: ['plays', playId],
    queryFn: () => gameApi.getPlay(playId),
  });

  const gameSocket = useGameSocket(playId);
  const { currentPlay, setGameEvent } = useGameStore();

  const handleGameEnd = async (result: GameResult) => {
    await gameApi.endPlay(playId, result);

    // 친밀함 상태 확인
    const match = await matchApi.getMatch(play.matchId);
    if (match.isIntimate) {
      // 상세 프로필 열람 가능 알림
    }

    router.push('/game/result');
  };

  return (
    <View>
      {/* 게임별 컴포넌트 렌더링 */}
      {play?.game.code === 'spot_the_difference' && (
        <SpotTheDifferenceGame
          socket={gameSocket}
          onEnd={handleGameEnd}
        />
      )}
    </View>
  );
}
```

---

## 타입 정의 위치

```
src/
├── types/
│   ├── index.ts              # 전체 타입 export
│   ├── auth.ts               # 인증 관련 타입
│   ├── user.ts               # 사용자, 프로필
│   ├── match.ts              # 매칭, 조건
│   ├── game.ts               # 게임, 플레이
│   ├── ticket.ts             # 티켓
│   ├── social.ts             # 채팅, 약속
│   └── commerce.ts           # 주문, 선물
```

---

## 참고 문서

- [백엔드 도메인 모델](./backend-domain-model.md)
- [로드맵](../tasks/roadmap.md)
- [백엔드 로드맵](../tasks/backend-roadmap.md)
- [Expo Router 공식 문서](https://docs.expo.dev/router/introduction/)
- [React Query 공식 문서](https://tanstack.com/query/latest)
- [Zustand 공식 문서](https://zustand-demo.pmnd.rs/)
- [Tamagui 공식 문서](https://tamagui.dev/)

---

**최초 작성**: 2025-11-19
