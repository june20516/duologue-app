// scripts/sync-seed-design/index-md.ts
import { writeIfChanged, type SyncResult } from './write.js';

const OUT = 'docs/references/seed-design/INDEX.md';

export interface IndexInputs {
  components: string[];
  foundationPages: string[];
  iconCounts: { monochrome: number; multicolor: number; version: string };
}

export async function writeIndex(input: IndexInputs): Promise<SyncResult> {
  const { components, foundationPages, iconCounts } = input;
  const compRows = components
    .map(n => `| \`${n}\` | [components/${n}.md](components/${n}.md) | [rootage/components/${n}.json](rootage/components/${n}.json) | https://seed-design.io/docs/components/${n} |`)
    .join('\n');
  const foundRows = foundationPages
    .map(n => `| \`${n}\` | [foundation/${n}.md](foundation/${n}.md) | https://seed-design.io/docs/foundation/${n} |`)
    .join('\n');

  const body = `# seed-design 레퍼런스

duologue-app이 seed-design을 **참조 자료**로 활용하기 위한 로컬 캐시. 토큰을 직접 import하지 말고 시맨틱 구조·네이밍·스펙만 차용한다. 사용 규칙은 \`/CLAUDE.md\`의 "Design Reference: seed-design" 섹션 참고.

- 외부 사이트: https://seed-design.io
- 저장소: https://github.com/daangn/seed-design
- 라이센스: [LICENSE-NOTICE.md](LICENSE-NOTICE.md)

## Foundation

| 항목 | 로컬 가이드 | 원본 |
|---|---|---|
${foundRows}

## Components

| 컴포넌트 | 가이드 | 스펙(JSON) | 원본 |
|---|---|---|---|
${compRows}

## Rootage 토큰

\`rootage/\` 폴더에 \`color.json\`, \`font-size.json\`, \`dimension.json\` 등 원본 YAML이 JSON으로 변환되어 보관됨. 원본은 https://github.com/daangn/seed-design/tree/dev/packages/rootage.

## Icons

- 미리보기: [tools/seed-icons-preview.html](../../../tools/seed-icons-preview.html)
- 데이터: \`icons/monochrome.json\` (${iconCounts.monochrome}개), \`icons/multicolor.json\` (${iconCounts.multicolor}개)
- 패키지 버전: \`@karrotmarket/icon-data@${iconCounts.version}\`
- 브랜드성 아이콘(logo/karrot/daangn 키워드)은 자동 제외됨.

## 갱신

- 자동: 매주 월요일 09:00 KST GitHub Actions가 변경 시 PR 생성
- 수동: \`yarn sync:seed\`
- 변경 감지만: \`yarn sync:seed:check\`
- 화이트리스트 조정: \`components/_whitelist.json\` 편집
`;

  return writeIfChanged(OUT, body);
}
