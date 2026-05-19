# Phase 2-B — Form 컴포넌트 시맨틱 토큰 마이그레이션

- **Status:** pending
- **상위 로드맵:** [seed-design 적용 로드맵 — Phase 2-B](../../specs/2026-05-08-seed-design-adoption-roadmap.md)
- **선행 의존:** [Phase 1-A — 시맨틱 토큰 키 보강](../../specs/2026-05-13-phase-1a-semantic-tokens.md)

## 배경

`components/ui/Input.tsx`가 원시 컬러 토큰을 직접 참조하고 있다. 1-A에서 `borderColorError` 등 필요한 시맨틱 키는 이미 마련됨.

## 교체 대상 (Input.tsx 기준)

| 현재 | 대상 | 비고 |
|---|---|---|
| `borderColor: '$error'` (에러 상태) | `'$borderColorError'` | 1-A에서 추가됨 |
| `borderColor: '$lime'` (focus 상태) | `'$borderColorFocus'` | 이미 테마 존재 |
| `borderColor: '$gray300'` (기본) | `'$borderColor'` | 이미 테마 존재 |
| `borderColor: '$gray200'` (disabled) | 결정 필요 — `$borderColor` + opacity 0.5로 충분한가? | 검토 항목 |
| `bg: '$white'` | `'$inputBackground'` | 이미 테마 존재 |
| `bg: '$gray100'` (disabled) | `'$inputBackgroundDisabled'` | 이미 테마 존재 |
| `color: '$offBlack'` (label) | `'$color'` | 이미 테마 존재 |
| `color: '$error'` (에러 label) | `'$error'` 유지 | 의미 동일 |

## 작업

1. Input.tsx의 `getBorderColor`·`getBackgroundColor`·label color를 시맨틱 토큰으로 교체
2. FormInput.tsx도 동일 패턴 점검 (Input 래퍼이므로 보통 자동 상속)
3. 다크 모드에서 모든 상태(default/focus/error/disabled) 시각 확인

## 검토 항목 (별도 결정 필요)

- disabled 상태의 border를 별도 시맨틱(`borderColorDisabled`)으로 분리할지, opacity로 처리할지
- Phase 2-A Button 작업과 일관성 맞추기 — 같은 의사결정을 두 번 하지 않도록

## DoD

- [ ] Input.tsx 내 원시 컬러 참조 0건
- [ ] light/dark · default/focus/error/disabled 4×2 상태 수동 확인
- [ ] `yarn tsc` / `yarn lint` 통과
- [ ] Phase 1-A spec의 후속 작업 표에서 본 항목 체크
