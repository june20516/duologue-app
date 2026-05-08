# duologue-app — Claude 가이드

## Design Reference: seed-design

duologue는 자체 브랜드(Lime/Purple/Aqua)를 유지한다. seed-design은 **참조 자료**로만 사용한다.

- 디자인·UI 결정 시 우선 `docs/references/seed-design/INDEX.md`를 본다.
- 컴포넌트 스펙은 `docs/references/seed-design/components/<name>.md`와
  `rootage/components/<name>.json` 참고.
- 토큰을 그대로 import하지 말 것. 시맨틱 구조·네이밍·state 분기 규칙만 차용한다.
- 로컬 캐시에 없으면 `docs/references/seed-design/components/_whitelist.json`에
  추가 후 다음 sync에서 자동 반영. 사용자가 즉시 필요시 `yarn sync:seed` 실행.
- 사용자에게 디자인 제안 시 참조한 원본 URL을 함께 명시
  (예: `https://seed-design.io/docs/components/switch`).
- seed-design의 컴포넌트 코드(`@seed-design/react`)는 RN에서 동작하지 않으므로
  코드 자체를 가져오지 않는다.
- 당근 브랜드성 아이콘(logo/karrot/daangn 키워드)은 사용 금지.
