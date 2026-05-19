# Phase 1-A — 시맨틱 토큰 키 보강 (실행 계획)

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking. 본 plan은 단일 파일 변경이라 sub-agent 분할 없이 순차 실행.

**Goal:** `tamagui.config.ts`의 light/dark 테마에 시맨틱 키 7개씩 추가한다. 신규 정의 3개(`warningBackground`, `infoBackground`, `borderColorError`)와 Toast가 호출 중인 임시 alias 4개(`successLight`/`errorLight`/`warningLight`/`infoLight`)로 구성된다.

**Architecture:** 테마 객체 두 개(`lightTheme`, `darkTheme`)에 키만 추가. 원시 팔레트(`tokens.ts`), 컴포넌트 코드, 화이트리스트는 손대지 않는다.

**Tech Stack:** TypeScript, Tamagui v4 (`@tamagui/config/v4`)

**Spec:** [`docs/specs/2026-05-13-phase-1a-semantic-tokens.md`](../specs/2026-05-13-phase-1a-semantic-tokens.md)

**Verification approach:**
- `yarn tsc --noEmit` 통과 — 신규 시맨틱 키가 `TamaguiCustomConfig` 타입에 추론되는지
- `yarn lint` 통과
- 앱 부팅 후 Toast 4종이 옅은 배경을 그리는지 (1-A 이전엔 undefined 호출로 비어 있었음 — 이번 alias 추가로 비로소 그려져야 정상)
- 그 외 화면(Input, Card, Modal)은 변화 없어야 정상

**Out of scope (Phase 2로 이관):** Toast의 `$*Light` → `$*Background` 호출 교체 + alias 제거(2-D), Input의 원시 토큰 직참조 시맨틱화(2-B). spec §5 참조.

---

## File Structure

```
duologue-app/
├── tamagui.config.ts                                          # 수정 (양 테마에 7키씩 추가)
└── docs/
    ├── specs/2026-05-13-phase-1a-semantic-tokens.md           # spec
    ├── plans/2026-05-13-phase-1a-semantic-tokens.md           # 본 문서
    └── tasks/pending/
        ├── phase2-b-form-semantic-migration.md                # 후속
        └── phase2-d-toast-semantic-cleanup.md                 # 후속 (alias 제거 포함)
```

`styles/tokens.ts`는 손대지 않는다. 신규 시맨틱 키는 기존 원시 팔레트(`tokens.color.warningLight` 등)를 그대로 가리킨다.

---

## Task 1: light/dark 테마에 시맨틱 키 7개씩 추가

**Files:**
- Modify: `tamagui.config.ts`

- [ ] **Step 1: `lightTheme`에 7키 추가**

  `tamagui.config.ts:80` 의 `borderColorFocus: tokens.color.purple,` 다음 줄에 `borderColorError` 추가.

  `lightTheme` 객체 끝(`info: tokens.color.info,` 다음 줄)에 `warningBackground`, `infoBackground`, 그리고 alias 4개를 TEMP 주석과 함께 추가:

  ```ts
    warningBackground: tokens.color.warningLight,
    info: tokens.color.info,
    infoBackground: tokens.color.infoLight,

    // TEMP: alias of *Background. Remove after Phase 2-D Toast cleanup (docs/tasks/pending/phase2-d-toast-semantic-cleanup.md)
    successLight: tokens.color.successLight,
    errorLight: tokens.color.errorLight,
    warningLight: tokens.color.warningLight,
    infoLight: tokens.color.infoLight,
  ```

- [ ] **Step 2: `darkTheme`에 7키 추가**

  `darkTheme`도 동일 위치·동일 구조로 추가하되 값만 `*Dark`로:

  ```ts
    warningBackground: tokens.color.warningDark,
    info: tokens.color.info,
    infoBackground: tokens.color.infoDark,

    // TEMP: alias of *Background. Remove after Phase 2-D Toast cleanup (docs/tasks/pending/phase2-d-toast-semantic-cleanup.md)
    successLight: tokens.color.successDark,
    errorLight: tokens.color.errorDark,
    warningLight: tokens.color.warningDark,
    infoLight: tokens.color.infoDark,
  ```

  그리고 `borderColorFocus: tokens.color.aqua,` 다음 줄에 `borderColorError: tokens.color.error,` 추가.

- [ ] **Step 3: 두 테마의 키 집합이 일치하는지 점검**

  Tamagui는 light/dark 테마가 동일한 키 집합을 가지길 기대한다. 두 객체를 시각적으로 비교해 추가한 7키가 양쪽에 빠짐없이 들어갔는지 확인.

## Task 2: 검증

- [ ] **Step 1: 타입 체크**

  ```bash
  yarn tsc --noEmit
  ```

  Expected: 에러 0건.

- [ ] **Step 2: lint**

  ```bash
  yarn lint
  ```

  Expected: 에러 0건.

- [ ] **Step 3: 앱 부팅 sanity check (수동)**

  - [ ] Toast 4종(success/error/warning/info) 표출 → light/dark 모두 옅은 배경이 그려짐 (1-A 이전엔 undefined로 비어 있었음 — 이번엔 보여야 정상)
  - [ ] Input 에러 상태 화면 → 변화 없음
  - [ ] Card / Modal 화면 → 변화 없음

## Task 3: 커밋

- [ ] **Step 1: docs 먼저 커밋** (spec/plan/pending tasks/roadmap cross-reference)

- [ ] **Step 2: 구현 커밋** (`tamagui.config.ts` 한 파일)

  커밋 메시지 예:

  ```
  feat(tokens): Phase 1-A 시맨틱 테마 키 보강

  light/dark 각 7키씩 추가:
  - 신규: warningBackground, infoBackground, borderColorError
  - 임시 alias (Phase 2-D Toast 정리 후 제거): successLight, errorLight, warningLight, infoLight

  Toast가 호출하던 $*Light 키가 비로소 매핑되어 옅은 배경이 그려진다.
  ```

---

## 완료 후 다음 단계

- 본 plan 모든 task가 끝나면 Phase 1-B(타이포 스케일·line-height) spec 작성으로 이동.
- Phase 2 진입 시 spec §5의 이관 항목(2-B Form, 2-D Toast)을 입력으로 포함.
