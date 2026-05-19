# Phase 2-D — Toast 시맨틱 토큰 정리

- **Status:** pending
- **상위 로드맵:** [seed-design 적용 로드맵 — Phase 2-D](../../specs/2026-05-08-seed-design-adoption-roadmap.md)
- **선행 의존:** [Phase 1-A — 시맨틱 토큰 키 보강](../../specs/2026-05-13-phase-1a-semantic-tokens.md)

## 배경

Phase 1-A에서 Toast가 호출하는 `$successLight`/`$errorLight`/`$warningLight`/`$infoLight`를 **임시 alias**로 light/dark 테마에 등록했다. 이 alias는 의미상 `*Background` 키와 중복이므로 **Toast 코드 정리와 함께 제거**해야 한다.

## 작업

### 1. Toast 코드 교체 (`components/ui/Toast.tsx`)

현재:
```ts
const toastColors = {
  success: { bg: '$successLight', borderColor: '$success', color: '$success', icon: tokens.color.success },
  error:   { bg: '$errorLight',   borderColor: '$error',   color: '$error',   icon: tokens.color.error },
  warning: { bg: '$warningLight', borderColor: '$warning', color: '$warning', icon: tokens.color.warning },
  info:    { bg: '$infoLight',    borderColor: '$info',    color: '$info',    icon: tokens.color.info },
};
```

→ `$*Light` 4개를 `$*Background`로 교체.

### 2. alias 키 제거 (`tamagui.config.ts`)

light·dark 각각에서 다음 4개 키 제거:

- `successLight`
- `errorLight`
- `warningLight`
- `infoLight`

(TEMP 주석도 함께 제거)

### 3. (선택) icon prop 처리

Toast의 `icon: tokens.color.success` 같은 원시 토큰 import는 Lucide 컴포넌트가 string color를 요구하기 때문이라 어쩔 수 없다. 단, `useTheme()` 훅으로 동일 컬러를 가져오면 다크 모드 분기가 자동화된다. 검토 후 결정.

## DoD

- [ ] Toast 4 type 모두 `$*Background` 사용
- [ ] alias 4개 테마에서 제거
- [ ] `yarn tsc` / `yarn lint` 통과
- [ ] Toast light/dark 양 모드 수동 확인
- [ ] Phase 1-A spec의 후속 작업 표에서 본 항목 체크
