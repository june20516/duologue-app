# Duologue 구현 로드맵

> 작성일: 2025-01-14
> 버전: 1.0

## 개요

Duologue 서비스의 전체 구현 단계를 정의한 문서입니다.
도메인 모델 분석을 바탕으로 의존성을 고려하여 단계를 구성했습니다.

## 구현 전략

### 기본 원칙
- **뼈대를 세우고 살을 붙이는 방식**: 코어 로직 우선, 부가 기능은 후순위
- **의존성 기반 순서**: 선행 작업 완료 후 다음 단계 진행
- **단계별 검증**: 각 Phase 완료 시 통합 테스트

### API 방식
- **RESTful API** 채택
- HTTP 표준 캐싱, CDN 통합 용이
- Include/Fields 패턴으로 Over/Under-fetching 해결
- 실시간 통신은 WebSocket 사용

---

## Phase 0: 인프라 기반 (Foundation) ✅

**상태**: 완료

### 완료 항목
- 데이터베이스 연결 설정 (PostgreSQL)
- 마이그레이션 전략 (Goose)
- 트랜잭션 기반 테스트 헬퍼
- 타임스탬프 함수 전략

---

## Phase 1: 인증/회원 기반 (Core Identity) ✅

**우선순위**: 최우선
**의존성**: 없음
**목표**: 모든 기능의 전제조건인 사용자 인증 및 기본 프로필 구축

### 1-1. Passwordless 이메일 인증 (회원가입)
**작업 문서**: `phase1-1-passwordless-signup.md`

**인증 방식**: 비밀번호 없이 이메일 + 인증 코드만 사용

**회원가입 플로우**:
1. 이메일 입력 및 인증 요청
2. 이메일 중복 체크 (중복 시 에러)
3. 6자리 인증 코드 생성 (5분 유효)
4. 인증 코드 이메일 발송
5. 인증 코드 입력 및 검증
6. User 생성 + JWT Access Token (15분) + Refresh Token (30일) 발급
7. 프로필 작성 페이지로 이동

**구현 내용**:
- User 엔티티 마이그레이션 (password_hash 제거)
- 이메일 중복 검증
- 인증 코드 생성/검증 (6자리 숫자, 5분 유효)
- 이메일 발송 서비스 연동
- JWT Access Token + Refresh Token 발급

**API**:
- `POST /api/v1/auth/request-signup` - 이메일 입력 → 인증 코드 발송
- `POST /api/v1/auth/verify-signup` - 인증 코드 검증 → User 생성 + 토큰 발급

### 1-2. Passwordless 로그인
**작업 문서**: `phase1-2-passwordless-login.md`

**로그인 플로우**:
1. 이메일 입력 및 로그인 코드 요청
2. User 존재 확인 (미가입 시 에러)
3. 6자리 로그인 코드 생성 (5분 유효)
4. 로그인 코드 이메일 발송
5. 로그인 코드 입력 및 검증
6. JWT Access Token (15분) + Refresh Token (30일) 발급

**구현 내용**:
- 로그인 코드 생성/검증
- JWT 발급/검증 (기존 코드 활용)
- Refresh Token 처리 (30일 유효, Redis 저장)
- 로그아웃 (Refresh Token 무효화)
- 미들웨어 통합

**API**:
- `POST /api/v1/auth/request-login` - 이메일 입력 → 로그인 코드 발송
- `POST /api/v1/auth/verify-login` - 로그인 코드 검증 → 토큰 발급
- `POST /api/v1/auth/refresh` - Refresh Token으로 Access Token 갱신
- `POST /api/v1/auth/logout` - Refresh Token 무효화
- `GET /api/v1/auth/me` - 현재 사용자 정보

### 1-3. 프로필 기본 CRUD
**작업 문서**: `phase1-3-profile-basic-crud.md`

- Profile 엔티티 마이그레이션
- 기본 프로필 정보 CRUD
  - 닉네임 (unique)
  - 프로필 이미지 URL
  - 성별
  - 한줄 자기소개
  - 관심사
  - 지역
- 닉네임 중복 검증
- 레벨/경험치 초기화

**API**:
- `GET /api/v1/profiles/me`
- `PATCH /api/v1/profiles/me`
- `GET /api/v1/profiles/{id}` (기본 정보만)

**검증 기준**:
- [ ] 회원가입: 이메일 입력 → 코드 발송 → 코드 검증 → User 생성 → 토큰 발급 → 프로필 작성 플로우 동작
- [ ] 로그인: 이메일 입력 → 코드 발송 → 코드 검증 → 토큰 발급 플로우 동작
- [ ] Refresh Token으로 30일간 자동 로그인 가능
- [ ] 프로필 설정 전체 플로우 동작
- [ ] 모든 엔드포인트 테스트 커버리지 80% 이상

---

## Phase 2: 매칭 코어 (Matching Core) 🔴

**우선순위**: 높음
**의존성**: Phase 1 (User, Profile)
**목표**: 서비스의 핵심 가치인 매칭 시스템 구축

### 2-1. 티켓 시스템 기본
**작업 문서**: `phase2-1-ticket-system.md`

- MatchTicket, GameTicket, ContinueTicket 엔티티
- 티켓 초기화 (회원가입 시)
- 티켓 조회 API
- 티켓 자동 충전 로직

**API**:
- `GET /api/v1/tickets`

### 2-2. 매칭 프리셋
**작업 문서**: `phase2-2-match-preset.md`

- MatchPreset 엔티티
- 프리셋 CRUD
- 기본 프리셋 설정

**API**:
- `GET /api/v1/match-presets`
- `POST /api/v1/match-presets`
- `PATCH /api/v1/match-presets/{id}`
- `DELETE /api/v1/match-presets/{id}`

### 2-3. 매칭 대기열 및 성립
**작업 문서**: `phase2-3-matching-queue.md`

- 매칭 요청 (MatchTicket 소모)
- 매칭 조건 검증
- 간단한 매칭 로직 (FIFO 또는 조건 기반)
- Match 엔티티 생성
- MatchCondition 스냅샷 저장

**API**:
- `POST /api/v1/matches` (매칭 요청)
- WebSocket `/ws/matching` (대기열 상태)

### 2-4. 매칭 관리
**작업 문서**: `phase2-4-match-management.md`

- 매칭 목록 조회
- 매칭 상세 조회
- 매칭 거절/종료
- 매칭 삭제 (soft delete)

**API**:
- `GET /api/v1/matches?include=profile,play_count`
- `GET /api/v1/matches/{id}`
- `PATCH /api/v1/matches/{id}/reject`
- `DELETE /api/v1/matches/{id}`

**검증 기준**:
- [ ] 매칭 요청 → 대기 → 성립 → 목록 조회 전체 플로우 동작
- [ ] 매칭 조건 필터링 정상 동작
- [ ] 하루 3회 제한 검증

---

## Phase 3: 게임 플레이 (Game Core) 🟡

**우선순위**: 높음
**의존성**: Phase 2 (Match)
**목표**: 매칭의 목적인 게임 플레이 기능 구현

### 3-1. 게임 마스터 데이터
- Game 엔티티 마이그레이션
- 시드 데이터 (4개 게임)

### 3-2. 게임 시작 및 Play 기록
- 게임 시작 검증
- Play 엔티티 생성
- Match 상태 업데이트 (matched → active)

**API**:
- `GET /api/v1/games`
- `POST /api/v1/matches/{id}/play`

### 3-3. 게임 종료 및 결과 처리
- Play 결과 저장
- 친밀함 상태 판정 (3게임 이상)
- 레벨/경험치 계산

**API**:
- `PATCH /api/v1/plays/{id}/result`
- `GET /api/v1/matches/{id}/plays`

### 3-4. WebSocket 게임 통신 (기본)
- WebSocket 서버 구조
- 게임 세션 관리
- 게임 이벤트 브로드캐스트

**WebSocket**:
- `/ws/game/{play_id}`

**검증 기준**:
- [ ] 게임 시작 → 진행 → 종료 플로우 동작
- [ ] 3게임 후 친밀함 상태 전환 확인
- [ ] WebSocket 연결 및 이벤트 전송 정상 동작

---

## Phase 4: 소셜 기능 (Social) 🟢

**우선순위**: 중간
**의존성**: Phase 3 (친밀함 상태)
**목표**: 친밀함 이후 소셜 기능 활성화

### 4-1. 프로필 상세 정보
- 상세 프로필 CRUD (본명, 나이, 직업 등)
- 친밀함 상태 기반 접근 제어
- 프로필 미디어 업로드

**API**:
- `GET /api/v1/profiles/{id}?level=intimate`
- `PATCH /api/v1/profiles/me/detail`

### 4-2. 채팅 기능
- ChatRoom 생성
- ChatMessage CRUD
- WebSocket 채팅 통신
- 읽음 처리

**API**:
- `POST /api/v1/matches/{id}/chat-room`
- `GET /api/v1/chat-rooms/{id}/messages`
- `POST /api/v1/chat-rooms/{id}/messages`
- WebSocket `/ws/chat/{room_id}`

### 4-3. 게임 약속 (재게임)
- GameAppointment 생성
- 약속 응답 (수락/거절/시간 수정)
- GameAppointmentHistory 기록
- GameTicket 차감
- 재게임 입장 관리

**API**:
- `POST /api/v1/matches/{id}/game-appointments`
- `GET /api/v1/game-appointments`
- `PATCH /api/v1/game-appointments/{id}/respond`
- `PATCH /api/v1/game-appointments/{id}/cancel`

**검증 기준**:
- [ ] 친밀함 상태에서만 상세 프로필/채팅 접근 가능
- [ ] 게임 약속 제안 → 응답 → 재게임 플로우 동작
- [ ] 티켓 차감 로직 검증

---

## Phase 5: 상거래 (Commerce) 🔵

**우선순위**: 중간
**의존성**: Phase 1 (User)
**목표**: 수익화 기능 구현

### 5-1. 주문 및 결제
- Order 엔티티
- 결제 연동 (PG사)
- 티켓 구매 및 지급
- 결제 상태 관리

**API**:
- `POST /api/v1/orders`
- `GET /api/v1/orders`
- `GET /api/v1/orders/{id}`
- `POST /api/v1/orders/{id}/pay`

### 5-2. 선물 기능
- Gift 엔티티
- GameTicket 선물하기
- 선물 수령

**API**:
- `POST /api/v1/gifts`
- `GET /api/v1/gifts/received`
- `POST /api/v1/gifts/{id}/receive`

**검증 기준**:
- [ ] 주문 생성 → 결제 → 티켓 지급 플로우 동작
- [ ] 선물 발송 → 수령 플로우 동작

---

## Phase 6: 관리 및 안전 (Moderation) 🟣

**우선순위**: 중간
**의존성**: Phase 1 (User)
**목표**: 서비스 품질 관리 기능

### 6-1. 신고 기능
- Report 엔티티
- 신고 생성 및 조회
- 신고 사유 검증

**API**:
- `POST /api/v1/reports`
- `GET /api/v1/reports` (본인이 한 신고만)

### 6-2. 관리자 기능
- 신고 처리
- 계정 정지
- 통계 대시보드

**API**:
- `GET /api/v1/admin/reports`
- `PATCH /api/v1/admin/reports/{id}/review`
- `PATCH /api/v1/admin/users/{id}/suspend`
- `GET /api/v1/admin/stats`

**검증 기준**:
- [ ] 신고 접수 → 관리자 검토 → 조치 플로우 동작
- [ ] 계정 정지 시 로그인 차단 확인

---

## Phase 7: 최적화 및 부가 기능 (Enhancement) ⚪

**우선순위**: 낮음
**의존성**: 모든 Phase 완료
**목표**: 서비스 고도화

### 7-1. 매칭 알고리즘 고도화
- 조건 기반 매칭 로직 개선
- 매칭 품질 점수
- 재매칭 방지

### 7-2. 알림 시스템
- 푸시 알림 (FCM)
- 인앱 알림
- 이메일 알림

### 7-3. 레벨/경험치 시스템 상세화
- 레벨업 보상
- 레벨별 티켓 소지량 증가
- 업적 시스템

### 7-4. 이어하기 텔레파시 게임
- 텔레파시 게임 로직
- ContinueTicket 사용

### 7-5. 성능 최적화
- 쿼리 최적화
- 캐싱 (Redis)
- CDN 연동

---

## 진행 현황

| Phase | 상태 | 시작일 | 완료일 | 비고 |
|-------|------|--------|--------|------|
| Phase 0 | ✅ 완료 | 2025-01-13 | 2025-01-13 | 데이터베이스 기반 |
| Phase 1 | ✅ 완료 | 2025-01-14 | 2025-01-19 | 인증/회원 기반 |
| Phase 2 | 🔴 대기 | - | - | 매칭 코어 |
| Phase 3 | - | - | - | 게임 플레이 |
| Phase 4 | - | - | - | 소셜 기능 |
| Phase 5 | - | - | - | 상거래 |
| Phase 6 | - | - | - | 관리 |
| Phase 7 | - | - | - | 최적화 |

---

## 참고 문서

- [도메인 모델](../specs/domain-model.md)
- [데이터베이스 마이그레이션 전략](../adr/001-database-migration-strategy.md)
- [프로젝트 문서 관리 가이드](../README.md)

---

**최종 수정**: 2025-01-19
