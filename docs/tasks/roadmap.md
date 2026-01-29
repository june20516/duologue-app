# Duologue 구현 로드맵 (프론트엔드)

> 작성일: 2025-11-19
> 버전: 1.0
> 기반: [백엔드 로드맵](./backend-roadmap.md)

## 개요

Duologue 앱의 프론트엔드 구현 단계를 정의한 문서입니다.
백엔드 API 개발 진행 상황과 연동하여 단계별로 UI/UX를 구현합니다.

## 구현 전략

### 기본 원칙
- **Phase 단위 완성 전략**: 각 Phase를 백엔드 → 프론트엔드 순으로 완성
  - Phase 1 백엔드 완성 → Phase 1 프론트엔드 완성 → Phase 2로 이동
  - 한 Phase 내에서 백엔드 API를 먼저 완성한 후 프론트엔드 연동
- **컴포넌트 재사용성**: 공통 컴포넌트를 먼저 구축하고 재사용
- **점진적 기능 추가**: 최소 기능으로 시작해서 점차 확장
- **타입 안전성**: TypeScript를 적극 활용하여 타입 오류 최소화

### 1인 개발 작업 순서
1. **Phase N 백엔드 구현** → 백엔드 로드맵의 Phase N 완료
2. **Phase N 프론트엔드 구현** → 이 문서의 Phase N 완료
3. **Phase N 통합 테스트** → 백엔드 + 프론트엔드 E2E 검증
4. Phase N+1로 이동

### 기술 스택
- **프레임워크**: React Native 0.81 + Expo ~54.0
- **라우팅**: Expo Router ~6.0 (파일 기반)
- **UI**: Tamagui
- **상태 관리**: Zustand (글로벌) + React Query (서버)
- **API**: ConnectRPC (@connectrpc/connect-web)
- **실시간**: WebSocket (TBD)

---

## Phase 0: 프로젝트 기반 설정 🟢

**상태**: 진행 중
**의존성**: 없음
**목표**: 개발 환경 구축 및 기본 구조 설정

### 0-1. 프로젝트 초기 설정
**작업 문서**: `phase0-1-project-setup.md`

**구현 내용**:
- Expo 프로젝트 초기화 ✅
- TypeScript 설정
- ESLint + Prettier 설정
- 폴더 구조 설정
  ```
  src/
  ├── api/          # API 클라이언트
  ├── components/   # 재사용 컴포넌트
  ├── hooks/        # 커스텀 훅
  ├── stores/       # Zustand 스토어
  ├── types/        # TypeScript 타입
  ├── utils/        # 유틸리티 함수
  └── constants/    # 상수
  ```

### 0-2. UI 라이브러리 및 디자인 시스템
**작업 문서**: `phase0-2-design-system.md`

**구현 내용**:
- Tamagui 설치 및 설정
- 컬러 팔레트 정의
- 타이포그래피 정의
- 공통 컴포넌트 구축
  - Button
  - Input
  - Card
  - Modal
  - Loading Spinner
  - Toast

### 0-3. 네비게이션 구조
**작업 문서**: `phase0-3-navigation.md`

**구현 내용**:
- Expo Router 설정
- 기본 화면 구조 생성
  - `app/_layout.tsx` - 루트 레이아웃
  - `app/index.tsx` - 시작 화면
  - `app/(tabs)/_layout.tsx` - 탭 네비게이션
  - 인증 가드 구현

### 0-4. API 클라이언트 설정
**작업 문서**: `phase0-4-api-client.md`

**구현 내용**:
- ConnectRPC 클라이언트 설정
- Auth + Logging 인터셉터
- 토큰 갱신 로직 (TokenRefreshManager)
- React Query 설정
- ConnectRPC 에러 핸들링 (ApplicationError + ErrorCode)

**검증 기준**:
- [x] 프로젝트가 iOS/Android 시뮬레이터에서 정상 실행
- [x] Expo Router 네비게이션 동작
- [x] 기본 컴포넌트 확인 가능
- [x] ConnectRPC 클라이언트 정상 동작

---

## Phase 1: 인증 및 프로필 기본 🔴

**우선순위**: 최우선
**의존성**: 백엔드 Phase 1 완료 (백엔드 로드맵 참조)
**목표**: 회원가입, 로그인, 프로필 설정 UI 구현
**작업 순서**: 백엔드 Phase 1 완료 → 프론트엔드 Phase 1 시작

### 1-1. Passwordless 회원가입 UI
**작업 문서**: `phase1-1-signup-ui.md`

**백엔드 API**:
- `POST /api/v1/auth/request-signup`
- `POST /api/v1/auth/verify-signup`

**구현 내용**:
- `app/auth/email-input.tsx` - 이메일 입력 화면
- `app/auth/code-verify.tsx` - 인증 코드 입력 화면
- 이메일 유효성 검증 (클라이언트)
- 인증 코드 타이머 (5분)
- 에러 메시지 표시

**상태 관리**:
- Zustand `authStore` 생성
  - `setTokens()`
  - `setUser()`

**UX 플로우**:
1. 이메일 입력
2. 인증 코드 이메일 발송 안내
3. 6자리 코드 입력 (자동 제출)
4. 회원가입 성공 → 프로필 설정으로 이동

### 1-2. Passwordless 로그인 UI
**작업 문서**: `phase1-2-login-ui.md`

**백엔드 API**:
- `POST /api/v1/auth/request-login`
- `POST /api/v1/auth/verify-login`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/logout`

**구현 내용**:
- 회원가입과 동일한 화면 재사용 (타입만 다름)
- 자동 로그인 (Refresh Token)
- 로그아웃 기능
- 인증 가드 (Protected Routes)

**상태 관리**:
- `authStore` 확장
  - `logout()`
  - `refreshToken()`

### 1-3. 프로필 설정 UI
**작업 문서**: `phase1-3-profile-setup-ui.md`

**백엔드 API**:
- `GET /api/v1/profiles/me`
- `PATCH /api/v1/profiles/me`

**구현 내용**:
- `app/auth/profile-setup.tsx` - 프로필 설정 화면
- `app/(tabs)/profile.tsx` - 내 프로필 조회
- `app/profile/edit.tsx` - 프로필 수정
- 필드:
  - 닉네임 (중복 체크)
  - 프로필 이미지 업로드
  - 성별
  - 한줄 자기소개
  - 관심사 (다중 선택)
  - 지역

**React Query**:
- `useProfile()` - 내 프로필 조회
- `useUpdateProfile()` - 프로필 수정

**UX 플로우**:
1. 회원가입 후 프로필 설정 필수
2. 프로필 미완성 시 메인 화면 접근 제한
3. 프로필 완성 후 메인 화면으로 이동

**검증 기준**:
- [x] 회원가입 플로우 전체 동작
- [x] 로그인 플로우 전체 동작
- [x] Refresh Token 자동 갱신 동작
- [x] 프로필 설정 및 수정 동작
- [x] 인증되지 않은 사용자는 메인 화면 접근 불가

---

## Phase 2: 매칭 코어 🔴

**우선순위**: 높음
**의존성**: 백엔드 Phase 2 완료, 프론트엔드 Phase 1 완료
**목표**: 매칭 요청, 대기, 성립, 목록 UI 구현
**작업 순서**: 백엔드 Phase 2 완료 → 프론트엔드 Phase 2 시작

### 2-1. 티켓 표시
**작업 문서**: `phase2-1-ticket-display.md`

**백엔드 API**:
- `GET /api/v1/tickets`

**구현 내용**:
- 헤더에 티켓 수량 표시
  - 매칭 티켓 (하루 3개)
  - 게임 티켓 (하루 1개)
  - 이어하기 티켓 (일주일 1개)
- 자동 충전 타이머 표시 (선택)

**상태 관리**:
- Zustand `ticketStore` 생성
- React Query `['tickets']` 캐싱

### 2-2. 매칭 조건 프리셋 UI
**작업 문서**: `phase2-2-preset-ui.md`

**백엔드 API**:
- `GET /api/v1/match-presets`
- `POST /api/v1/match-presets`
- `PATCH /api/v1/match-presets/:id`
- `DELETE /api/v1/match-presets/:id`

**구현 내용**:
- `app/match/preset.tsx` - 조건 설정 화면
- 조건 항목:
  - 성별 (남성/여성/상관없음)
  - 나이 범위 (슬라이더)
  - 관심사 (다중 선택)
- 프리셋 저장 및 관리
- 기본 프리셋 설정

### 2-3. 매칭 요청 및 대기 UI
**작업 문서**: `phase2-3-matching-queue-ui.md`

**백엔드 API**:
- `POST /api/v1/matches`
- WebSocket `/ws/matching`

**구현 내용**:
- `app/(tabs)/match.tsx` - 매칭 메인 화면
- `app/match/waiting.tsx` - 매칭 대기 화면
- 매칭 요청 버튼
- 대기 중 애니메이션
- 매칭 취소 버튼
- 매칭 성공 시 알림

**WebSocket**:
- `useMatchingSocket()` 훅 생성
- 매칭 성공 이벤트 수신
- 자동으로 매칭 상세 화면으로 이동

**상태 관리**:
- Zustand `matchStore`
  - `isWaitingForMatch`
  - `startMatching()`
  - `cancelMatching()`

### 2-4. 매칭 목록 및 상세 UI
**작업 문서**: `phase2-4-match-list-ui.md`

**백엔드 API**:
- `GET /api/v1/matches?include=profile,play_count`
- `GET /api/v1/matches/:id`
- `PATCH /api/v1/matches/:id/reject`
- `DELETE /api/v1/matches/:id`

**구현 내용**:
- `app/(tabs)/index.tsx` - 매칭 히스토리 (홈)
- `app/match/[id].tsx` - 매칭 상세
- 매칭 카드 컴포넌트
  - 블러 처리된 프로필 이미지 (새 매칭)
  - 블러 해제된 이미지 (매칭 기록)
  - 닉네임, 한줄 자기소개
  - 게임 횟수
  - 친밀함 상태 표시
- 매칭 거절 버튼
- 매칭 삭제 (스와이프)

**React Query**:
- `useMatches()` - 매칭 목록
- `useMatch(id)` - 매칭 상세

**검증 기준**:
- [ ] 매칭 요청 → 대기 → 성립 플로우 동작
- [ ] 매칭 목록 조회 및 필터링
- [ ] 프로필 블러 처리 정상 동작
- [ ] 매칭 거절/삭제 동작
- [ ] 티켓 소모 및 자동 충전 확인

---

## Phase 3: 게임 플레이 🟡

**우선순위**: 높음
**의존성**: 백엔드 Phase 3 완료, 프론트엔드 Phase 2 완료
**목표**: 게임 선택, 플레이, 결과 UI 구현
**작업 순서**: 백엔드 Phase 3 완료 → 프론트엔드 Phase 3 시작

### 3-1. 게임 선택 UI
**작업 문서**: `phase3-1-game-select-ui.md`

**백엔드 API**:
- `GET /api/v1/games`

**구현 내용**:
- `app/game/select.tsx` - 게임 선택 화면
- 4가지 게임 카드
  - 게임 이름, 설명
  - 음성 통화 필요 여부 아이콘
  - 게임 썸네일
- 게임 시작 확인 모달

### 3-2. 게임 플레이 UI (기본 구조)
**작업 문서**: `phase3-2-game-play-ui.md`

**백엔드 API**:
- `POST /api/v1/matches/:matchId/play`
- WebSocket `/ws/game/:playId`

**구현 내용**:
- `app/game/play/[playId].tsx` - 게임 플레이 화면
- 게임 타이머
- 게임 종료 버튼
- WebSocket 연결 상태 표시
- 음성 통화 연결 (선택)

**WebSocket**:
- `useGameSocket(playId)` 훅
- 게임 이벤트 송수신

**상태 관리**:
- Zustand `gameStore`
  - `currentPlay`
  - `setGameEvent()`

### 3-3. 게임 결과 및 친밀함 상태 UI
**작업 문서**: `phase3-3-game-result-ui.md`

**백엔드 API**:
- `PATCH /api/v1/plays/:id/result`
- `GET /api/v1/matches/:id/plays`

**구현 내용**:
- `app/game/result.tsx` - 게임 결과 화면
- 결과 표시 (성공/실패)
- 점수 표시
- 경험치 획득 애니메이션
- 친밀함 상태 달성 알림 (3게임 이상)
- 이어하기 의사 확인

**UX 플로우**:
1. 게임 종료
2. 결과 화면
3. 3게임 이상 시 "친밀함 상태가 되었습니다!" 알림
4. 이어하기 원하는지 확인
   - 양쪽 원함 → 이어하기 플로우
   - 한쪽이라도 원하지 않음 → 매칭 유지, 게임 종료

### 3-4. 게임별 UI 구현 (Phase 1: 틀린 그림 찾기)
**작업 문서**: `phase3-4-game-spot-difference.md`

**구현 내용**:
- `components/games/SpotTheDifference.tsx`
- 2개 이미지 나란히 표시
- 터치/클릭 이벤트 처리
- 틀린 부분 찾기 표시
- WebSocket으로 상대방과 동기화

**검증 기준**:
- [ ] 게임 선택 → 시작 → 플레이 → 종료 플로우 동작
- [ ] WebSocket 실시간 통신 정상 동작
- [ ] 3게임 후 친밀함 상태 전환 확인
- [ ] 게임 결과 저장 및 조회

---

## Phase 4: 소셜 기능 🟢

**우선순위**: 중간
**의존성**: 백엔드 Phase 4 완료, 프론트엔드 Phase 3 완료
**목표**: 친밀함 상태 프로필, 채팅, 게임 약속 UI
**작업 순서**: 백엔드 Phase 4 완료 → 프론트엔드 Phase 4 시작

### 4-1. 상세 프로필 UI
**작업 문서**: `phase4-1-detail-profile-ui.md`

**백엔드 API**:
- `GET /api/v1/profiles/:id?level=intimate`
- `PATCH /api/v1/profiles/me/detail`

**구현 내용**:
- `app/profile/[id].tsx` - 타인 프로필 상세
- 친밀함 상태에서만 표시되는 정보:
  - 본명
  - 나이
  - 직업
  - 소속/학교
  - 추가 사진
  - 소셜 계정
- 접근 제어: 친밀함 상태 아니면 "3게임 이상 플레이하면 볼 수 있어요" 표시

### 4-2. 채팅 UI
**작업 문서**: `phase4-2-chat-ui.md`

**백엔드 API**:
- `POST /api/v1/matches/:matchId/chat-room`
- `GET /api/v1/chat-rooms/:id/messages`
- `POST /api/v1/chat-rooms/:id/messages`
- WebSocket `/ws/chat/:roomId`

**구현 내용**:
- `app/(tabs)/chat.tsx` - 채팅 목록
- `app/chat/[roomId].tsx` - 채팅방
- 메시지 입력 및 전송
- 실시간 메시지 수신
- 읽음 표시
- 채팅방 목록 (최근 메시지 순)

**WebSocket**:
- `useChatSocket(roomId)` 훅

### 4-3. 게임 약속 UI
**작업 문서**: `phase4-3-appointment-ui.md`

**백엔드 API**:
- `POST /api/v1/matches/:matchId/game-appointments`
- `GET /api/v1/game-appointments`
- `PATCH /api/v1/game-appointments/:id/respond`
- `PATCH /api/v1/game-appointments/:id/cancel`

**구현 내용**:
- `app/appointment/create.tsx` - 약속 생성
- `app/appointment/[id].tsx` - 약속 상세 및 응답
- 약속 생성:
  - 시간 선택 (DateTimePicker)
  - 게임티켓 동봉 여부 (스위치)
- 약속 응답:
  - 수락
  - 시간 수정 제안
  - 거절
- 약속 히스토리 표시

**React Query**:
- `useGameAppointments()` - 약속 목록
- `useGameAppointment(id)` - 약속 상세

**검증 기준**:
- [ ] 친밀함 상태에서만 상세 프로필 접근 가능
- [ ] 채팅 전송 및 수신 정상 동작
- [ ] 게임 약속 제안 → 응답 → 재게임 플로우 동작
- [ ] 티켓 동봉 여부에 따른 차감 로직 확인

---

## Phase 5: 상거래 🔵

**우선순위**: 중간
**의존성**: 백엔드 Phase 5 완료
**목표**: 티켓 구매, 결제, 선물 UI
**작업 순서**: 백엔드 Phase 5 완료 → 프론트엔드 Phase 5 시작

### 5-1. 상점 UI
**작업 문서**: `phase5-1-store-ui.md`

**백엔드 API**:
- `POST /api/v1/orders`
- `GET /api/v1/orders`
- `POST /api/v1/orders/:id/pay`

**구현 내용**:
- `app/store/index.tsx` - 상점 메인
- `app/store/payment.tsx` - 결제
- `app/store/history.tsx` - 구매 내역
- 티켓 상품 목록
  - 매칭 티켓
  - 게임 티켓
  - 이어하기 티켓
- 가격 표시
- 결제 연동 (Expo In-App Purchases 또는 PG사)

### 5-2. 선물 UI
**작업 문서**: `phase5-2-gift-ui.md`

**백엔드 API**:
- `POST /api/v1/gifts`
- `GET /api/v1/gifts/received`
- `POST /api/v1/gifts/:id/receive`

**구현 내용**:
- 게임티켓 선물하기 버튼 (매칭 상세 화면)
- 선물 메시지 입력
- 받은 선물 목록
- 선물 수령 확인

**검증 기준**:
- [ ] 티켓 구매 → 결제 → 지급 플로우 동작
- [ ] 선물 발송 → 수령 플로우 동작
- [ ] 결제 실패 시 에러 처리

---

## Phase 6: 관리 및 안전 🟣

**우선순위**: 중간
**의존성**: 백엔드 Phase 6 완료
**목표**: 신고 기능 UI
**작업 순서**: 백엔드 Phase 6 완료 → 프론트엔드 Phase 6 시작

### 6-1. 신고 UI
**작업 문서**: `phase6-1-report-ui.md`

**백엔드 API**:
- `POST /api/v1/reports`
- `GET /api/v1/reports`

**구현 내용**:
- `app/report/create.tsx` - 신고하기
- 신고 대상:
  - 사용자
  - 프로필 미디어
- 신고 사유 선택
  - 욕설/비하
  - 성적 괴롭힘
  - 폭력/협박
  - 스팸
  - 사기
- 상세 설명 입력 (선택)
- 내가 한 신고 목록

**검증 기준**:
- [ ] 신고 접수 정상 동작
- [ ] 신고 목록 조회

---

## Phase 7: 최적화 및 부가 기능 ⚪

**우선순위**: 낮음
**의존성**: 모든 Phase 완료
**목표**: 서비스 고도화

### 7-1. 알림 시스템
- 푸시 알림 (Expo Notifications)
- 인앱 알림
- 알림 설정 화면

### 7-2. 이어하기 텔레파시 게임 UI
- 텔레파시 게임 UI
- ContinueTicket 사용 옵션

### 7-3. 성능 최적화
- 이미지 최적화 (Expo Image)
- 리스트 가상화 (FlashList)
- 번들 사이즈 최적화
- 코드 스플리팅

### 7-4. 애니메이션 및 제스처
- React Native Reanimated 활용
- 스와이프 제스처
- 페이지 전환 애니메이션

### 7-5. 다크 모드
- 다크 모드 지원
- 테마 토글

---

## 진행 현황

| Phase | 상태 | 시작일 | 완료일 | 비고 |
|-------|------|--------|--------|------|
| Phase 0 | ✅ 완료 | 2025-11-19 | 2025-01-14 | 프로젝트 기반 |
| Phase 1 | ✅ 완료 | 2025-01-14 | 2025-01-19 | 인증 및 프로필 |
| Phase 2-1 | ✅ 완료 | 2025-01-28 | 2026-01-29 | 티켓 표시 |
| Phase 2 | 🔴 대기 | - | - | 매칭 코어 |
| Phase 3 | - | - | - | 게임 플레이 |
| Phase 4 | - | - | - | 소셜 기능 |
| Phase 5 | - | - | - | 상거래 |
| Phase 6 | - | - | - | 관리 |
| Phase 7 | - | - | - | 최적화 |

---

## 우선순위별 작업 순서

### 1차 목표 (MVP)
1. Phase 0: 프로젝트 기반 설정
2. Phase 1: 인증 및 프로필
3. Phase 2: 매칭 코어
4. Phase 3: 게임 플레이 (1개 게임)

### 2차 목표
5. Phase 3: 나머지 게임 구현
6. Phase 4: 소셜 기능

### 3차 목표
7. Phase 5: 상거래
8. Phase 6: 관리 기능
9. Phase 7: 최적화

---

## 각 Phase별 예상 작업 기간

- Phase 0: 3-5일
- Phase 1: 5-7일
- Phase 2: 7-10일
- Phase 3: 10-14일 (게임별 UI 포함)
- Phase 4: 7-10일
- Phase 5: 5-7일
- Phase 6: 3-5일
- Phase 7: 7-10일

**총 예상 기간**: 약 8-10주

---

## 백엔드 연동 전략

### Mock 데이터 활용
백엔드 API 개발 전에는 Mock 데이터로 UI 먼저 구현:

```typescript
// api/mock/auth.ts
export const mockAuthApi = {
  requestSignup: async (email: string) => {
    await delay(1000);
    return { success: true };
  },

  verifySignup: async (email: string, code: string) => {
    await delay(1000);
    return {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      user: {
        id: '1',
        email,
        createdAt: new Date().toISOString(),
      },
    };
  },
};
```

### 환경 변수로 전환
```typescript
// lib/api.ts
const api = process.env.EXPO_PUBLIC_USE_MOCK === 'true'
  ? mockApi
  : realApi;
```

---

## 참고 문서

- [도메인 모델](../specs/domain-model.md)
- [백엔드 로드맵](./backend-roadmap.md)
- [백엔드 도메인 모델](../specs/backend-domain-model.md)
- [작업 방법론](../README.md)

---

**최초 작성**: 2025-11-19
**최종 수정**: 2026-01-29
