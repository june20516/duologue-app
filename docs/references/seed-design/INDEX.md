# seed-design 레퍼런스

duologue-app이 seed-design을 **참조 자료**로 활용하기 위한 로컬 캐시. 토큰을 직접 import하지 말고 시맨틱 구조·네이밍·스펙만 차용한다. 사용 규칙은 `/CLAUDE.md`의 "Design Reference: seed-design" 섹션 참고.

- 외부 사이트: https://seed-design.io
- 저장소: https://github.com/daangn/seed-design
- 라이센스: [LICENSE-NOTICE.md](LICENSE-NOTICE.md)

## Foundation

| 항목 | 로컬 가이드 | 원본 |
|---|---|---|
| `design-token` | [foundation/design-token.md](foundation/design-token.md) | https://seed-design.io/docs/foundation/design-token |
| `design-token-reference` | [foundation/design-token-reference.md](foundation/design-token-reference.md) | https://seed-design.io/docs/foundation/design-token-reference |
| `elevation` | [foundation/elevation.md](foundation/elevation.md) | https://seed-design.io/docs/foundation/elevation |
| `gradient` | [foundation/gradient.md](foundation/gradient.md) | https://seed-design.io/docs/foundation/gradient |
| `inclusive-design` | [foundation/inclusive-design.md](foundation/inclusive-design.md) | https://seed-design.io/docs/foundation/inclusive-design |
| `international-design` | [foundation/international-design.md](foundation/international-design.md) | https://seed-design.io/docs/foundation/international-design |
| `motion` | [foundation/motion.md](foundation/motion.md) | https://seed-design.io/docs/foundation/motion |
| `radius` | [foundation/radius.md](foundation/radius.md) | https://seed-design.io/docs/foundation/radius |
| `spacing` | [foundation/spacing.md](foundation/spacing.md) | https://seed-design.io/docs/foundation/spacing |

## Components

| 컴포넌트 | 가이드 | 스펙(JSON) | 원본 |
|---|---|---|---|
| `action-button` | [components/action-button.md](components/action-button.md) | [rootage/components/action-button.json](rootage/components/action-button.json) | https://seed-design.io/docs/components/action-button |
| `action-sheet` | [components/action-sheet.md](components/action-sheet.md) | [rootage/components/action-sheet.json](rootage/components/action-sheet.json) | https://seed-design.io/docs/components/action-sheet |
| `alert-dialog` | [components/alert-dialog.md](components/alert-dialog.md) | [rootage/components/alert-dialog.json](rootage/components/alert-dialog.json) | https://seed-design.io/docs/components/alert-dialog |
| `bottom-sheet` | [components/bottom-sheet.md](components/bottom-sheet.md) | [rootage/components/bottom-sheet.json](rootage/components/bottom-sheet.json) | https://seed-design.io/docs/components/bottom-sheet |
| `callout` | [components/callout.md](components/callout.md) | [rootage/components/callout.json](rootage/components/callout.json) | https://seed-design.io/docs/components/callout |
| `checkbox` | [components/checkbox.md](components/checkbox.md) | [rootage/components/checkbox.json](rootage/components/checkbox.json) | https://seed-design.io/docs/components/checkbox |
| `chip` | [components/chip.md](components/chip.md) | [rootage/components/chip.json](rootage/components/chip.json) | https://seed-design.io/docs/components/chip |
| `divider` | [components/divider.md](components/divider.md) | [rootage/components/divider.json](rootage/components/divider.json) | https://seed-design.io/docs/components/divider |
| `field` | [components/field.md](components/field.md) | [rootage/components/field.json](rootage/components/field.json) | https://seed-design.io/docs/components/field |
| `inline-banner` | [components/inline-banner.md](components/inline-banner.md) | [rootage/components/inline-banner.json](rootage/components/inline-banner.json) | https://seed-design.io/docs/components/inline-banner |
| `list` | [components/list.md](components/list.md) | [rootage/components/list.json](rootage/components/list.json) | https://seed-design.io/docs/components/list |
| `radio` | [components/radio.md](components/radio.md) | [rootage/components/radio.json](rootage/components/radio.json) | https://seed-design.io/docs/components/radio |
| `segmented-control` | [components/segmented-control.md](components/segmented-control.md) | [rootage/components/segmented-control.json](rootage/components/segmented-control.json) | https://seed-design.io/docs/components/segmented-control |
| `skeleton` | [components/skeleton.md](components/skeleton.md) | [rootage/components/skeleton.json](rootage/components/skeleton.json) | https://seed-design.io/docs/components/skeleton |
| `snackbar` | [components/snackbar.md](components/snackbar.md) | [rootage/components/snackbar.json](rootage/components/snackbar.json) | https://seed-design.io/docs/components/snackbar |
| `switch` | [components/switch.md](components/switch.md) | [rootage/components/switch.json](rootage/components/switch.json) | https://seed-design.io/docs/components/switch |
| `tabs` | [components/tabs.md](components/tabs.md) | [rootage/components/tabs.json](rootage/components/tabs.json) | https://seed-design.io/docs/components/tabs |
| `text-input` | [components/text-input.md](components/text-input.md) | [rootage/components/text-input.json](rootage/components/text-input.json) | https://seed-design.io/docs/components/text-input |
| `top-navigation` | [components/top-navigation.md](components/top-navigation.md) | [rootage/components/top-navigation.json](rootage/components/top-navigation.json) | https://seed-design.io/docs/components/top-navigation |

## Rootage 토큰

`rootage/` 폴더에 `color.json`, `font-size.json`, `dimension.json` 등 원본 YAML이 JSON으로 변환되어 보관됨. 원본은 https://github.com/daangn/seed-design/tree/dev/packages/rootage.

## Icons

- 미리보기: [tools/seed-icons-preview.html](../../../tools/seed-icons-preview.html)
- 데이터: `icons/monochrome.json` (652개), `icons/multicolor.json` (82개)
- 패키지 버전: `@karrotmarket/icon-data@1.34.0`
- 브랜드성 아이콘(logo/karrot/daangn 키워드)은 자동 제외됨.

## 갱신

- 자동: 매주 월요일 09:00 KST GitHub Actions가 변경 시 PR 생성
- 수동: `yarn sync:seed`
- 변경 감지만: `yarn sync:seed:check`
- 화이트리스트 조정: `components/_whitelist.json` 편집
