# Phase 1-A — 시맨틱 토큰 구조 재정렬 (실행 계획)

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking. 본 plan은 단일 파일 변경이라 sub-agent 분할 없이 순차 실행.

**Goal:** `tamagui.config.ts`의 light/dark 테마에 누락된 시맨틱 컬러 키 5개를 추가하고, `*Background` → `*Surface` 네이밍 통일을 위해 기존 키를 alias로 유지한다.

**Architecture:** 테마 객체 두 개(`lightTheme`, `darkTheme`)에 키만 추가. 원시 팔레트(`tokens.ts`), 컴포넌트 코드, 화이트리스트는 손대지 않는다.

**Tech Stack:** TypeScript, Tamagui v4 (`@tamagui/config/v4`)

**Spec:** [`docs/specs/2026-05-13-phase-1a-semantic-tokens.md`](../specs/2026-05-13-phase-1a-semantic-tokens.md)

**Verification approach:**
- `yarn tsc --noEmit` 통과 — 신규 시맨틱 키가 `TamaguiCustomConfig` 타입에 추론되는지
- 앱 부팅 후 주요 화면(Toast, Input, Card, Modal)이 변화 없이 렌더링되는지 수동 sanity check (회귀 없어야 정상 — 추가만 했으므로)
- 신규 키를 한 곳에서 시범 사용해 보고(예: `<View backgroundColor="$successSurface">`) 타입 자동완성 동작 확인

**Out of scope (Phase 2로 이관):** 컴포넌트 코드의 `$successBackground` → `$successSurface` 호출 교체, `Input`/`Toast`의 원시 토큰 직참조 제거. spec § 11 참조.

---

## File Structure

```
duologue-app/
├── tamagui.config.ts      # 수정 (양 테마에 키 추가)
└── docs/
    └── plans/
        └── 2026-05-13-phase-1a-semantic-tokens.md  # 본 문서
```

`styles/tokens.ts`는 손대지 않는다. 신규 시맨틱 키는 기존 원시 팔레트(`tokens.color.successLight` 등)를 그대로 가리킨다.

---

## Task 1: light/dark 테마에 신규 시맨틱 키 추가 + alias 매핑

**Files:**
- Modify: `tamagui.config.ts`

**변경 내용:**

각 테마에 다음 5개 키를 추가한다. `successBackground`/`errorBackground`는 *기존 키와 동일 값을 가리키는 alias*로 유지(현재 존재하므로 변경 불필요, 신규 `*Surface`만 추가).

| 키 | light 값 | dark 값 |
|---|---|---|
| `successSurface` | `tokens.color.successLight` | `tokens.color.successDark` |
| `warningSurface` | `tokens.color.warningLight` | `tokens.color.warningDark` |
| `infoSurface` | `tokens.color.infoLight` | `tokens.color.infoDark` |
| `errorSurface` | `tokens.color.errorLight` | `tokens.color.errorDark` |
| `borderColorError` | `tokens.color.error` | `tokens.color.error` |

`successBackground`/`errorBackground`는 그대로 두고, 동일 값의 `*Surface` 키를 함께 둔다(둘 다 존재 → Phase 2에서 컴포넌트 호출 교체 후 release 한 차례 뒤 alias 제거).

- [ ] **Step 1: `lightTheme`에 신규 키 5개 추가**

  `tamagui.config.ts:91` 의 `info: tokens.color.info,` 다음 줄(즉 `lightTheme` 객체 닫는 `}` 직전)에 추가:

  ```ts
    // Semantic Surfaces (Phase 1-A: *Background와 alias 관계, 컴포넌트 교체는 Phase 2)
    successSurface: tokens.color.successLight,
    warningSurface: tokens.color.warningLight,
    infoSurface: tokens.color.infoLight,
    errorSurface: tokens.color.errorLight,

    // Error border (Input error 상태용)
    borderColorError: tokens.color.error,
  ```

- [ ] **Step 2: `darkTheme`에 신규 키 5개 추가**

  `tamagui.config.ts:148` 의 `info: tokens.color.info,` 다음 줄(즉 `darkTheme` 객체 닫는 `}` 직전)에 추가:

  ```ts
    // Semantic Surfaces (Phase 1-A: *Background와 alias 관계, 컴포넌트 교체는 Phase 2)
    successSurface: tokens.color.successDark,
    warningSurface: tokens.color.warningDark,
    infoSurface: tokens.color.infoDark,
    errorSurface: tokens.color.errorDark,

    // Error border (Input error 상태용)
    borderColorError: tokens.color.error,
  ```

- [ ] **Step 3: 두 테마의 키 집합이 일치하는지 빠르게 점검**

  Tamagui는 light/dark 테마가 동일한 키 집합을 가지길 기대한다. 시각적으로 두 객체를 비교하거나 다음 명령으로 키 차이를 확인:

  ```bash
  node -e "
    const path = require('path');
    const ts = require('typescript');
    const src = require('fs').readFileSync('tamagui.config.ts', 'utf8');
    // 간이 검증: 정규식으로 lightTheme/darkTheme 본문의 키 추출
    const get = (name) => {
      const m = src.match(new RegExp('const ' + name + ' = \\\\{([\\\\s\\\\S]*?)\\\\n\\\\};'));
      return [...m[1].matchAll(/^\\s*(\\w+):/gm)].map(x => x[1]);
    };
    const L = get('lightTheme'), D = get('darkTheme');
    const diff = (a, b) => a.filter(k => !b.includes(k));
    console.log('only in light:', diff(L, D));
    console.log('only in dark :', diff(D, L));
  "
  ```

  Expected: 두 출력 모두 빈 배열.

## Task 2: 검증

- [ ] **Step 1: 타입 체크**

  ```bash
  yarn tsc --noEmit
  ```

  Expected: 에러 0건. (단순 키 추가이므로 영향 없음)

- [ ] **Step 2: 신규 키의 타입 자동완성 sanity check**

  임시 파일에서 신규 키 참조를 시도해 타입 추론이 되는지 확인 (실제로 파일은 만들지 않고 머릿속 또는 IDE에서 한 번):

  ```tsx
  <View backgroundColor="$successSurface" />  // 자동완성/타입 OK
  <View borderColor="$borderColorError" />    // 자동완성/타입 OK
  ```

  Expected: TS 에러 없이 인식.

- [ ] **Step 3: ESLint·Prettier 통과**

  ```bash
  yarn lint && yarn format:check
  ```

  Expected: 에러 0건.

- [ ] **Step 4: 앱 부팅 sanity check (수동, 사용자가 시뮬레이터에서)**

  - [ ] Toast 표출 화면 → 변화 없음
  - [ ] Input 에러 상태 화면 → 변화 없음
  - [ ] Card / Modal 화면 → 변화 없음

  > 추가만 했으므로 회귀 0이어야 정상. 차이가 있으면 Step 1으로 회귀.

## Task 3: 커밋

- [ ] **Step 1: 변경 스테이지**

  ```bash
  git add tamagui.config.ts docs/plans/2026-05-13-phase-1a-semantic-tokens.md
  ```

- [ ] **Step 2: 커밋**

  ```bash
  git commit -m "feat(tokens): Phase 1-A 시맨틱 surface 키 추가

  - lightTheme/darkTheme에 successSurface/warningSurface/infoSurface/errorSurface 추가
  - borderColorError 추가 (Input error 상태용)
  - 기존 successBackground/errorBackground는 alias로 유지 (Phase 2에서 호출 교체 후 제거)

  Refs: docs/specs/2026-05-13-phase-1a-semantic-tokens.md"
  ```

- [ ] **Step 3: 푸시 여부 사용자 확인**

  develop으로 머지 전, 본 변경을 `feature/seed-design-adoption`에 푸시할지 사용자에게 확인.

---

## 완료 후 다음 단계

- 본 plan 모든 task가 끝나면 Phase 1-B(타이포 스케일·line-height) spec 작성으로 이동.
- Phase 2 진입 시 본 spec § 11의 이관 항목 잊지 말고 입력으로 포함.
