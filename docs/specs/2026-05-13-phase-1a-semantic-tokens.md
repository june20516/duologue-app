# Phase 1-A — 시맨틱 토큰 키 보강

- **Date:** 2026-05-13 (작성) / 2026-05-19 (네이밍 결정 갱신)
- **Status:** Accepted
- **Owner:** Bran
- **선행:** [Phase 0-A 현재 상태 감사](2026-05-11-current-design-system-audit.md)
- **로드맵 위치:** [seed-design 적용 로드맵 § Phase 1-A](2026-05-08-seed-design-adoption-roadmap.md)

## 1. 범위와 비범위

로드맵의 1-A 이름은 "시맨틱 토큰 구조 재설계"이지만, Phase 0-A 감사 결과 **구조는 이미 적절**하고 누락 키만 채우면 됨이 확인됨. 따라서 1-A의 실 작업은 **테마 키 보강만** 수행한다. 본 spec은 그 보강 범위만 다룬다.

### In Scope

- `tamagui.config.ts`의 `lightTheme`·`darkTheme`에 시맨틱 키 7개씩 추가
  - 신규 정의 3개: `warningBackground`, `infoBackground`, `borderColorError`
  - 임시 alias 4개: `successLight`, `errorLight`, `warningLight`, `infoLight` (TEMP 주석 필수)
- 추가된 키가 `TamaguiCustomConfig` 타입에 자동 추론되는지 확인

### Out of Scope (각 후속 단계로 이관 — §5 참조)

- `styles/tokens.ts` 구조 변경
- 컴포넌트(Toast/Input/Card/Modal 등)의 토큰 참조 교체
- Tamagui 인터랙션 키(`backgroundHover/Press/Focus`, `colorHover/Press` 등) 충당
- 타이포그래피·스페이싱·라디우스·shadow 토큰 (Phase 1-B/1-C)

---

## 2. 결정 사항

| 항목 | 결정 | 사유 |
|---|---|---|
| 시맨틱 토큰 위치 | **테마-단일 소스** 유지 | 현 구조가 Tamagui 정석이며 갭이 적음. JS 직접 import는 `useTheme()` 훅으로 해결. |
| 1-A 작업 범위 | **테마 키 확장만**, 컴포넌트 교체는 Phase 2 | 시각적 회귀 없이 기반만 확보. |
| 신규 surface 키 네이밍 | **`*Background`로 통일** (기존 `successBackground`/`errorBackground`와 일관) | state 계열 기존 키와 동일 패턴 유지. `*Surface`로 재명명하는 안도 검토했으나 state↔brand 비대칭(state는 `*Background`, brand는 `*Surface`)이 잔존하므로 기존 패턴 보존을 택함. |
| `$successLight`/`$errorLight` 등 Toast 호출 키 | **임시 alias로 등록 후 Phase 2-D에서 제거** | Toast가 현재 호출 중이라 즉시 동작 회복 필요. 의미는 `*Background` 계열과 동일. |
| `borderColorError` | **추가** (값은 `$error`와 동일) | Phase 2-B Input 정리 시 의미 분리 확보. |
| Tamagui 인터랙션 키 일괄 충당 | **하지 않음** | 현재 `hoverStyle`/`pressStyle` prop으로 우회하고 있어 시점 불필요. |

> **컴포넌트의 원시 참조 제거**(Input의 `$lime`/`$gray200`/`$offBlack` 직접 사용, Toast의 `tokens.color.*` JS import)는 시각 회귀를 동반하므로 Phase 2로 이관. §5 참조.

---

## 3. 추가 키 명세

### 3.1 light 테마 추가 7키

```ts
// 신규 정의 (의미 분리)
warningBackground: tokens.color.warningLight,
infoBackground:    tokens.color.infoLight,
borderColorError:  tokens.color.error,

// 임시 alias — Phase 2-D Toast 정리 후 제거
successLight:      tokens.color.successLight,   // = successBackground
errorLight:        tokens.color.errorLight,     // = errorBackground
warningLight:      tokens.color.warningLight,   // = warningBackground
infoLight:         tokens.color.infoLight,      // = infoBackground
```

### 3.2 dark 테마 추가 7키

```ts
// 신규 정의
warningBackground: tokens.color.warningDark,
infoBackground:    tokens.color.infoDark,
borderColorError:  tokens.color.error,

// 임시 alias — Phase 2-D Toast 정리 후 제거
successLight:      tokens.color.successDark,
errorLight:        tokens.color.errorDark,
warningLight:      tokens.color.warningDark,
infoLight:         tokens.color.infoDark,
```

### 3.3 alias 주석 규칙

alias 4개에는 코드 내에 다음 형식의 단일 라인 주석을 반드시 부여:

```ts
// TEMP: alias of *Background. Remove after Phase 2-D Toast cleanup (docs/tasks/pending/phase2-d-toast-semantic-cleanup.md)
```

---

## 4. 영향·검증

### 4.1 영향 범위

- 추가만 수행 — 기존 키 값 변경 없음 → 시각적 회귀 위험 0
- Toast는 현재 undefined 키 호출 상태였으므로 alias 추가로 **버그 수정 효과** 발생 (옅은 배경이 비로소 그려짐)
- Tamagui 테마 타입은 자동 확장 — 컴포넌트에서 `$borderColorError` 등 즉시 사용 가능

### 4.2 검증 (DoD)

- [ ] light/dark 각각 7개 키 추가 완료
- [ ] alias 4개에 TEMP 주석 부여
- [ ] `yarn tsc` 통과
- [ ] `yarn lint` 통과
- [ ] Toast 4종(success/error/warning/info) 표시 — light/dark 둘 다 옅은 배경이 그려지는지 수동 확인
- [ ] 기타 화면 회귀 없음 (스폿 체크: 로그인/홈/카드 컴포넌트가 있는 화면)

### 4.3 롤백

추가한 키를 제거하면 즉시 원상 복귀. Toast는 다시 undefined로 빠지지만 1-A 이전 상태와 동일.

---

## 5. 후속 작업 (Deferred — 반드시 다음 단계에서 처리)

본 spec에서 의도적으로 미룬 항목들을 누락 없이 후속 단계에 연결한다. 모든 항목은 `docs/tasks/pending/`에 대응 문서 존재.

| 후속 작업 | 1-A에서 미룬 이유 | 처리 시점·문서 |
|---|---|---|
| Toast의 `$successLight` 계열 참조 → `$successBackground` 계열로 교체 + alias 4개 제거 | 1-A는 키 추가만, 컴포넌트 코드 미수정 | Phase 2-D · [`pending/phase2-d-toast-semantic-cleanup.md`](../tasks/pending/phase2-d-toast-semantic-cleanup.md) |
| Input의 `$error` border 참조 → `$borderColorError`로 교체, 그 외 원시 토큰(`$lime`/`$gray200`/`$gray300`/`$gray100`/`$white`/`$offBlack`) 시맨틱화 | 1-A는 키 추가만 | Phase 2-B · [`pending/phase2-b-form-semantic-migration.md`](../tasks/pending/phase2-b-form-semantic-migration.md) |
| Card·BaseModal·기타 컴포넌트의 하드코딩 radius·원시 토큰 시맨틱화 | 1-C 라디우스 토큰 정의 후 가능 | Phase 1-C / Phase 2-C · 로드맵 참조 |
| Tamagui 인터랙션 키(`backgroundHover/Press/Focus`, `colorHover/Press`, `borderColorPress`, `outlineColor` 등) 충당 검토 | 현재 prop 우회 패턴으로 문제 없음 | Phase 2 컴포넌트 작업 중 필요 시점에 추가 (별도 spec 불필요) |
| `tokens.ts`에 시맨틱 export 추가 (JS 직접 import용) | 테마-단일 소스 결정으로 미선택 | 보류 — Toast 정리 후 재검토. `useTheme()` 훅으로 충분하면 영구 미수행 |

---

## 6. 변경 파일

| 파일 | 상태 |
|---|---|
| `tamagui.config.ts` | MODIFY (lightTheme/darkTheme에 7키씩 추가) |
| `styles/tokens.ts` | 변경 없음 |
| 컴포넌트 | 변경 없음 |

---

## 부록 A — seed-design rootage와의 매핑

참고만. 우리 키는 Tamagui 컨벤션을 유지한다.

| 우리 키 | seed-design 대응 |
|---|---|
| `primary` | `$color.bg.brand-solid` |
| `primaryPress` | `$color.bg.brand-solid-pressed` |
| `primarySurface` | `$color.bg.brand-weak` |
| `primarySurfacePress` | `$color.bg.brand-weak-pressed` |
| `colorOnPrimary` | `$color.fg.brand-contrast` |
| `successBackground` | `$color.bg.positive-weak` (seed-design엔 정확히 동일 키 없음) |
| `warningBackground` (신규) | `$color.bg.warning-weak` |
| `infoBackground` (신규) | `$color.bg.informative-weak` |
| `borderColorFocus` | `$color.stroke.brand` |
| `borderColorError` (신규) | `$color.stroke.critical` |
