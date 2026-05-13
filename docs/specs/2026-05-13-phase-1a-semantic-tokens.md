# Phase 1-A — 시맨틱 토큰 구조 재정렬

- **Date:** 2026-05-13
- **Status:** Draft (사용자 리뷰 대기)
- **Owner:** Bran
- **선행:** [Phase 0-A 현재 상태 감사](2026-05-11-current-design-system-audit.md)
- **로드맵 위치:** [seed-design 적용 로드맵 § Phase 1-A](2026-05-08-seed-design-adoption-roadmap.md)

## 1. 목적

`styles/tokens.ts`(원시 팔레트)와 `tamagui.config.ts`(시맨틱 테마)로 분리된 토큰 레이어를 재정렬해, 이후 Phase 1-B(타이포)·1-C(스페이싱)·Phase 2(컴포넌트) 작업의 기반을 만든다.

본 작업의 핵심은 **컬러 시맨틱 키의 완전성 확보**와 **컴포넌트가 원시 토큰을 직접 참조하는 패턴 차단**이다. 키 추가·재명명 자체는 가벼우나, 시각적 회귀를 동반하지 않게 신중히 진행한다.

## 2. 입력 (Phase 0-A 요약)

- 시맨틱 컬러 키는 현재 **테마 레이어에만** 존재 (`primary`, `primaryHover`, `primarySurface`, `colorOnPrimary` 등). 네이밍은 Tamagui 컨벤션을 따르고 있고 이 방향을 유지한다.
- **누락된 테마 시맨틱 키:**
  - `successLight`, `warningLight`, `infoLight` — Toast가 원시 `tokens.color.successLight`를 직접 import해서 우회 중
  - `borderColorError` — Input이 `$error`를 border로 직접 사용 중
- **원시 컬러 직참조 패턴:**
  - `Input`: `$lime`, `$gray200`, `$offBlack` 등을 `style`/`variants`에서 직접 사용
  - `Toast`: `tokens.color.success` 등 원시값을 JS import
- 토큰 키 충돌 위험: Tamagui `defaultConfig`의 숫자 키(`$0`~`$20`, `'0'`~`'12'`)는 그대로 유지하고, 시맨틱 키는 **추가만** 한다.

## 3. 결정 사항

### 3.1 시맨틱 컬러 레이어를 어디에 둘 것인가

**결정: theme 레이어에만 둔다.** `tokens.ts`에는 원시 팔레트만 유지.

근거:
- Tamagui 컨벤션상 시맨틱(상태·맥락 분기)은 theme이 담당하고, tokens는 원시값 저장소다.
- light/dark 분기는 theme에서 자연스럽게 해결되며, tokens에 시맨틱을 또 두면 동일 키가 두 레이어에 중복된다.
- 감사 문서가 "tokens.ts에 시맨틱 키 정의 필요"라고 표현한 진짜 원인은 컴포넌트가 시맨틱이 없어서 원시를 import한 것이므로, theme에 빠진 시맨틱을 채워 넣고 컴포넌트에서 `$themeKey`로 참조하면 해결된다.

부작용: JS에서 시맨틱 값을 정적으로 import해야 하는 케이스는 발생 시점에 별도 처리한다(예: 알림 라이브러리 외부 옵션). 현재는 그런 사례 없음.

### 3.2 누락 시맨틱 키 추가 목록

light/dark 양쪽에 다음 키를 추가한다:

| 키 | light 값 | dark 값 | 용도 |
|---|---|---|---|
| `successLight` | `tokens.color.successLight` | `tokens.color.successDark` | Toast/Banner success 배경 |
| `warningLight` | `tokens.color.warningLight` | `tokens.color.warningDark` | Toast/Banner warning 배경 |
| `infoLight` | `tokens.color.infoLight` | `tokens.color.infoDark` | Toast/Banner info 배경 |
| `errorLight` | `tokens.color.errorLight` | `tokens.color.errorDark` | (이미 있는 `errorBackground`와 중복 — 아래 3.3 참조) |
| `borderColorError` | `tokens.color.error` | `tokens.color.error` | Input error 상태 border |

> 네이밍 일관성: 현재 테마에 `successBackground`/`errorBackground`(이미 존재)와 `successLight`(컴포넌트가 요구)가 혼재 → 3.3에서 정리.

### 3.3 시맨틱 배경 네이밍 통일 — `*Surface`로 확정

현재 테마: `successBackground`, `errorBackground`만 존재. Toast는 `successLight` 같은 이름의 키를 원하지만 테마에 없다.

**결정: `*Surface`로 통일.** 기존 `primarySurface`/`secondarySurface`/`tertiarySurface`와 일관되며 "Surface = 약한 배경 레이어"라는 의미가 명확하다.

신규 키: `successSurface`, `warningSurface`, `infoSurface`, `errorSurface`.

마이그레이션 전략:
- **1-A에서 처리**: theme에 신규 `*Surface` 키 추가. 기존 `successBackground`/`errorBackground`는 동일 값 가리키는 alias로 유지(둘 다 존재).
- **Phase 2에서 처리**: 컴포넌트(`Toast`, `Banner` 등)의 `$successBackground` → `$successSurface` 호출 교체. 모든 참조가 사라지면 한 마이너 릴리스 후 alias 제거. (§ 11 참조)

### 3.4 alias 전략

- 본 Phase에서는 **추가만** 한다. 기존 키는 제거하지 않는다.
- `successBackground` → `successSurface` 같은 재명명이 들어가면 기존 키를 한 마이너 릴리스 동안 alias로 유지(둘 다 동일 값 가리킴). Phase 2 마무리에서 일괄 제거.

### 3.5 컴포넌트의 원시 참조 교체 — Phase 1-A 범위에서 제외

감사 문서가 1-A 인풋으로 명시했지만, 컴포넌트 수정은 시각적 회귀를 동반하므로 **Phase 2(컴포넌트 재정렬)에서 다룬다.** Phase 1-A는 토큰 인프라만 손대 회귀 위험을 0에 가깝게 유지한다.

> 예외: `Input`이 `$error`를 border에 직접 사용 중인 부분만, `borderColorError` 추가 후 Phase 2-B에서 교체.

## 4. 범위 (In Scope)

- `tamagui.config.ts`의 `lightTheme`/`darkTheme`에 누락 시맨틱 키 추가 (`successSurface`/`warningSurface`/`infoSurface`/`errorSurface`, `borderColorError`)
- 네이밍 통일 (`*Background` → `*Surface`)에 따른 기존 키 alias 유지
- 추가된 키의 타입 자동 추론 확인 (`TamaguiCustomConfig`로 노출되는지)
- 단순 시각 확인: 기존 화면이 깨지지 않는지 (추가만 했으니 영향 없어야 정상)

## 5. Out of Scope

- `space`/`size`/`radius` 토큰 정의 → Phase 1-C
- 타이포 스케일·line-height → Phase 1-B
- 컴포넌트의 `$theme` 키 참조 교체 → Phase 2
- 원시 팔레트(`tokens.ts`) 컬러값 변경 → 별도 작업 (Phase 4-B 시각 회귀 점검 시 결정)
- dark 모드에서 success/warning/info의 배경값 톤 재조정 (현재는 `*Dark` 원시값 그대로 사용)

## 6. 변경 대상 파일

- `tamagui.config.ts` — 키 추가
- `docs/references/seed-design/components/_whitelist.json` — 영향 없음

## 7. 산출물

- 본 spec 머지
- 후속 `docs/plans/2026-05-XX-phase-1a-semantic-tokens.md` (writing-plans 단계에서 생성)

## 8. 검증

- `yarn tsc --noEmit` 통과 — 새 시맨틱 키가 `TamaguiCustomConfig`로 추론되어 `<View backgroundColor="$successSurface">`가 타입 안전한지 확인
- 앱 부팅 후 기존 화면들 빠른 sanity check (Toast·Input·Card·Modal이 동일하게 렌더링)
- ESLint/Prettier 통과

## 9. 의존성·블로커

- 디자이너가 별도로 dark mode 시맨틱 배경색 톤을 잡아두지 않은 상태 → 임시로 `*Dark` 원시값 매핑, Phase 4-B에서 재조정

## 10. 작업 단위별 다음 단계

본 spec 확정 → `superpowers:writing-plans`로 실행 계획 작성 → `superpowers:executing-plans` 또는 직접 PR.

## 11. Phase 2로 이관되는 항목 (deferred)

본 spec의 결정 사항 중 컴포넌트 코드를 건드려야 하는 작업은 시각적 회귀 위험 때문에 Phase 2로 이관한다. 누락 방지를 위해 명시한다:

1. **`$successBackground` / `$errorBackground` → `$*Surface` 호출 교체** (§ 3.3에서 이관)
   - 영향 후보: `components/Toast.tsx`, 그 외 success/error 배경을 쓰는 컴포넌트
   - 교체 완료 후 한 마이너 릴리스 동안 alias 유지, 이후 alias 제거

2. **컴포넌트의 원시 토큰 직참조 제거 + 시맨틱 키로 교체** (§ 3.5에서 이관)
   - `components/Input` 계열: `$lime`/`$gray200`/`$offBlack` → 적절한 시맨틱 키
   - `components/Toast`: `tokens.color.success` 등 JS import → `$success`/`$successSurface` 테마 참조
   - `Input`의 `$error` border 사용 → 신규 `$borderColorError`로 교체

**추적 안전장치:**

- Phase 2 spec 작성 시 본 spec(`2026-05-13-phase-1a-semantic-tokens.md`)을 명시적 인풋으로 참조하고, 본 § 11 항목들이 Phase 2 컴포넌트 sub-project(특히 2-B Form, 2-D List·Snackbar)의 작업 범위에 포함됐는지 체크리스트로 확인.
- 로드맵 문서(`2026-05-08-seed-design-adoption-roadmap.md`)의 Phase 2 항목에도 본 § 11 cross-reference를 한 줄 추가해 두 곳에서 동시에 보이게 한다.

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
| `successSurface` (신규) | `$color.bg.positive-weak` (seed-design엔 정확히 동일 키 없음) |
| `borderColorFocus` | `$color.stroke.brand` |
| `borderColorError` (신규) | `$color.stroke.critical` |
