# seed-design 레퍼런스 → 실제 적용 로드맵

- **Date:** 2026-05-08
- **Status:** Draft (사용자 리뷰 대기)
- **Owner:** Bran
- **선행 작업:** [seed-design 레퍼런스 인프라](2026-05-08-seed-design-reference-infrastructure.md) (완료)

## 목적

구축된 seed-design 레퍼런스 캐시(`docs/references/seed-design/`)를 duologue-app의 실제 코드(토큰·컴포넌트)에 반영한다. duologue 자체 브랜드(Lime/Purple/Aqua)는 유지하되, 시맨틱 구조·네이밍·state 분기 규칙·인터랙션 패턴을 seed-design 패턴에 맞춰 재정렬한다.

본 문서는 **로드맵(메타 스펙)** 이며, 각 하위 프로젝트는 별도의 spec → plan → 실행 사이클로 진행한다.

## 가이드 원칙 (모든 하위 프로젝트 공통)

- duologue 브랜드 컬러는 유지. seed-design 토큰을 직접 import하지 않는다.
- 시맨틱 구조(예: `primary`/`primaryHover`/`primarySurface`/`onPrimary` 같은 분기)는 차용.
- 컴포넌트의 prop·variant 네이밍은 seed-design 컨벤션 참고.
- 모든 변경은 시각적 회귀를 동반하므로, 한 번에 하나의 컴포넌트 또는 영역만 수정. 여러 화면을 동시에 깨뜨리지 말 것.
- 변경 시점에 캐시(`docs/references/seed-design/`) 그대로 따라가지 말고, **duologue 맥락에 맞게 적용**.

## 하위 프로젝트 분해

### Phase 0 — 사전 분석 (별도 spec 불필요)

- **0-A. 현재 상태 진단**
  - `styles/tokens.ts`, `tamagui.config.ts`, `styles/common.ts`, `styles/shadow.ts`의 시맨틱 구조 정리
  - 사용 중인 컴포넌트의 prop·variant 패턴 목록화
  - seed-design rootage 토큰 구조와 비교한 갭 분석
  - 산출물: `docs/specs/2026-05-XX-current-design-system-audit.md` (분석 노트)

### Phase 1 — 토큰 레이어 재정렬

- **1-A. 시맨틱 토큰 구조 재설계**
  - 입력: 현 `tokens.ts` + seed-design rootage(color, dimension, radius, shadow, gradient, font-size, font-weight, line-height)
  - 작업: 의미 기반 시맨틱 키 정의 (`bgPrimary`, `bgSurface`, `fgOnPrimary`, `borderFocus` 등)
  - 변경 범위: `styles/tokens.ts`, `tamagui.config.ts` themes
  - 영향: 모든 컴포넌트가 새 시맨틱을 따르도록 점진 마이그레이션
  - **중요**: 기존 키를 일시 alias로 유지해 마이그레이션 부담 분산

- **1-B. 타이포그래피 스케일 정리**
  - seed-design font-size/font-weight/line-height 스케일 참고하여 duologue 스케일 정리
  - Pretendard 가중치(400/600/700)와 매핑
  - 변경 범위: `tamagui.config.ts`의 font 설정, `styles/common.ts`

- **1-C. spacing·radius·elevation 정리**
  - seed-design dimension/radius/shadow 패턴 참고
  - 8pt grid 또는 4pt grid 같은 base unit 정합

### Phase 2 — 컴포넌트 레이어 재설계

각 컴포넌트는 독립 sub-project. seed-design 화이트리스트에 등재된 19개 중 duologue 우선순위 높은 것부터:

- **2-A. Button 계열** (`action-button`, `text-button`, `toggle-button`, `chip` 참고)
  - 현재 사용 중인 button 형태들을 seed-design state·variant 패턴으로 재구성
  - props: `variant`, `size`, `tone`, `isLoading`, `isDisabled`
  - 변경 범위: `components/Button*` (있다면), 또는 신규 생성

- **2-B. Form 계열** (`field`, `text-input`, `checkbox`, `radio`, `switch`)
  - duologue 폼 기존 코드(react-hook-form 사용 중) 위에 시맨틱 일관성 적용
  - 라벨·헬퍼·에러 상태 토큰 정렬

- **2-C. Sheet/Modal 계열** (`bottom-sheet`, `action-sheet`, `alert-dialog`)
  - 현재 사용 중인 모달 패턴 정리
  - safe area·gesture 처리는 RN 고유 — seed-design 시각 토큰만 차용

- **2-D. List·Skeleton·Snackbar·Banner**
  - 단순 표시 컴포넌트들. 토큰 재정렬 후 빠르게 처리 가능

- **2-E. Navigation** (`top-navigation`, `tabs`, `segmented-control`)
  - expo-router/react-navigation 위에서 시각만 재정렬

### Phase 3 — 아이콘 도입

- **3-A. 아이콘 선정 + RN 코드젠**
  - `tools/seed-icons-preview.html`에서 duologue에 쓸 아이콘 선정
  - 선정 아이콘만 `react-native-svg` 컴포넌트로 코드젠 (선언적 · 트리셰이커블)
  - 또는 SVG 인라인 + `lucide-react-native` 대체 검토
  - 산출물: `components/icons/` 폴더에 자동 생성된 컴포넌트들

- **3-B. 기존 `lucide-react-native`/`@expo/vector-icons` 점진 교체**
  - 의존성 정리

### Phase 4 — 마무리

- **4-A. 오픈소스 고지 화면 갱신**
  - 앱 내 라이센스 화면에 `@karrotmarket/icon-data — MIT — Daangn` 추가
  - 다른 OSS 라이센스 누락분도 같이 점검

- **4-B. 시각 회귀 점검**
  - 주요 화면 스크린샷 비교 (수동 또는 detox/maestro 스크립트)
  - 디자이너 리뷰 (있다면)

## 진행 순서 (권장)

```
Phase 0 (감사) → 1-A → 1-B → 1-C → 2-A → 2-B → 2-C → 2-D → 2-E → 3-A → 3-B → 4-A → 4-B
```

토큰이 먼저 정리되어야 컴포넌트 재설계의 기반이 생긴다. 컴포넌트는 사용 빈도와 영향 범위 기준으로 우선순위.

## 의존성·블로커

- 디자이너가 있다면 토큰 결정 단계에서 사용자와 디자이너 합의 필요
- 마이그레이션 중에는 시각적 회귀 가능 — QA 빈도 증가
- `lucide-react-native` 등 외부 아이콘 의존성을 코드젠으로 교체할 경우 번들 크기·트리셰이킹 영향 확인

## Out of Scope

- 새로운 화면/기능 개발 (적용 작업이 끝난 뒤 별도)
- 디자인 변경 (브랜드·UX 자체)
- 백엔드/API 변경
- seed-design 캐시 인프라 자체 수정 (인프라는 [선행 spec](2026-05-08-seed-design-reference-infrastructure.md) 범위)

## 작업 단위별 사이클

각 하위 프로젝트는 다음을 순서대로 진행한다:

1. `superpowers:brainstorming` — 요구사항·범위 합의
2. spec 문서 → `docs/specs/YYYY-MM-DD-<sub-name>.md`
3. `superpowers:writing-plans` — 실행 계획 → `docs/plans/YYYY-MM-DD-<sub-name>.md`
4. 실행 (`superpowers:subagent-driven-development` 또는 `executing-plans`)
5. 시각 회귀 점검
6. 머지

## 시작 신호

다음 대화에서 **Phase 0-A (현재 상태 진단)** 부터 brainstorming으로 시작 권장.
시작 트리거 메시지 예:
> "duologue의 현재 토큰·컴포넌트 구조를 분석해서 seed-design 패턴과의 갭을 정리하고 싶다. 어디서부터 볼지 brainstorm하자."

또는 토큰 재정렬부터 직진하고 싶으면:
> "Phase 1-A 시작. styles/tokens.ts와 tamagui.config.ts를 seed-design 시맨틱 구조에 맞춰 재정렬하는 작업의 spec을 짜자."
