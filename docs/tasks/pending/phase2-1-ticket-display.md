# Phase 2-1: 티켓 표시 기능 구현

## 작성일

2026-01-14

## 우선순위

- [x] 높음

## 작업 개요

사용자의 티켓 보유 현황(매칭/게임/이어하기)을 화면 상단에 표시

## 작업 범위

### 포함 사항
- [ ] Ticket API 클라이언트 구성
- [ ] React Query 훅
- [ ] 티켓 표시 UI 컴포넌트
- [ ] 탭 레이아웃 헤더에 배치

### 제외 사항
- 자동 충전 타이머 (추후 추가)
- 티켓 구매/충전 기능 (Phase 5)
- 티켓 소모 로직 (Phase 2-3, 3)

## 기술적 접근

### Proto 스펙

```protobuf
service TicketService {
  rpc GetMyTickets(GetMyTicketsRequest) returns (GetMyTicketsResponse);
}

message GetMyTicketsResponse {
  Ticket match_ticket = 1;
  Ticket game_ticket = 2;
  Ticket continue_ticket = 3;
}

message Ticket {
  int32 quantity = 1;
  int32 max_quantity = 2;
  google.protobuf.Timestamp last_refill_at = 3;
}
```

### 파일 구조

```
api/
├── ticket.ts                     # NEW
└── transport.ts                  # MODIFY: ticketClient 추가

hooks/queries/
└── useTickets.ts                 # NEW

components/ticket/
└── TicketDisplay.tsx             # NEW

app/(tabs)/_layout.tsx            # MODIFY: headerRight 추가
```

### 구현 단계

1. **API 클라이언트**
   - `api/transport.ts`에 ticketClient 추가
   - `api/ticket.ts` 생성 (기존 profile.ts 패턴 참조)
   - proto Timestamp → Date 변환

2. **React Query 훅**
   - `hooks/queries/useTickets.ts` 생성
   - queryKey: `['tickets']`, staleTime: 1분

3. **UI 컴포넌트**
   - `components/ticket/TicketDisplay.tsx` 생성
   - 3개 티켓 가로 배치 (quantity/maxQuantity)
   - 로딩/에러 처리

4. **레이아웃 적용**
   - `app/(tabs)/_layout.tsx`의 screenOptions에서 headerShown: true 설정
   - headerRight에 TicketDisplay 배치

## DoD (Definition of Done)

- [ ] `api/ticket.ts` 구현 완료
- [ ] `hooks/queries/useTickets.ts` 구현 완료
- [ ] `components/ticket/TicketDisplay.tsx` 구현 완료
- [ ] 탭 레이아웃 헤더에 티켓 표시 적용
- [ ] 헤더에 3개 티켓 수량 표시 확인 (매칭/게임/이어하기)
- [ ] 탭 전환 시 캐싱 동작 확인 (불필요한 재호출 없음)
- [ ] 네트워크 에러 시 fallback UI 표시 확인
- [ ] TypeScript 컴파일 에러 없음
- [ ] ESLint 에러 없음

## 검증 방법

### 수동 확인
- [ ] iOS 시뮬레이터에서 티켓 표시 확인
- [ ] Android 시뮬레이터에서 티켓 표시 확인
- [ ] 네트워크를 끊고 에러 처리 확인

## 의존성

### 선행 작업
- Phase 0-4: API 클라이언트 설정 (완료)
- 백엔드: TicketService.GetMyTickets 구현 필요

### 후속 작업
- Phase 2-3: 매칭 요청 시 티켓 차감

## 주의사항

- proto 타입 → 도메인 타입 변환 명확히
- any 타입 금지
- 티켓 조회 실패 시에도 앱 동작 보장

## 참고 자료

- Proto: `proto/duologue/v1/ticket.proto`
- 기존 패턴: `api/profile.ts`, `hooks/queries/useProfile.ts`
