# seed-design 레퍼런스 인프라 구축 — 실행 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** seed-design 디자인 시스템을 duologue-app의 참조 자료로 자동 동기화하는 인프라를 구축한다.

**Architecture:** 로컬 캐시(`docs/references/seed-design/`) + 동기화 스크립트(`scripts/sync-seed-design.ts`) + GitHub Actions 주간 cron 자동 PR. 스크립트는 모듈화하여 아이콘/토큰/컴포넌트/가이드 각각을 독립 함수로 처리. 사용자 개입 경로는 화이트리스트 편집 + 미리보기 HTML.

**Tech Stack:** TypeScript, tsx, turndown(HTML→MD), js-yaml, GitHub Actions(`peter-evans/create-pull-request@v7`)

**Spec:** `docs/specs/2026-05-08-seed-design-reference-infrastructure.md`

**Verification approach:** 프로젝트에 테스트 프레임워크가 없고, 본 작업이 외부 데이터를 가져오는 빌드 스크립트이므로 형식적 단위 테스트 대신 다음으로 검증한다:
- `--check` 모드 (변경 감지 후 비-제로 종료)
- 첫 실행 후 출력물 수동 확인
- 두 번째 실행이 변경 없이 종료되는지 확인 (멱등성)

---

## File Structure

```
duologue-app/
├── scripts/
│   └── sync-seed-design/
│       ├── index.ts              # CLI 엔트리, --check 처리, summary 출력
│       ├── fetch.ts              # HTTP fetch + npm tarball 추출 유틸
│       ├── write.ts              # 헤더 주석 포함 파일 쓰기 + diff 추적
│       ├── icons.ts              # @karrotmarket/icon-data 동기화 + 브랜드 필터
│       ├── rootage.ts            # GitHub raw에서 rootage YAML → JSON
│       ├── guides.ts             # seed-design.io HTML → MD 변환 (foundation/components 공용)
│       ├── index-md.ts           # INDEX.md 자동 생성
│       └── license.ts            # LICENSE-NOTICE.md 작성
├── docs/references/seed-design/
│   ├── components/_whitelist.json   # 사람이 관리 (유일한 수동 파일)
│   └── (나머지 모두 자동 생성)
├── tools/
│   └── seed-icons-preview.html
├── .github/workflows/
│   └── sync-seed-design.yml
├── CLAUDE.md
└── package.json (modify)
```

각 모듈은 `sync(): Promise<SyncResult>` 형태의 단일 export 함수로 통일 (`SyncResult = { written: string[], removed: string[], unchanged: string[] }`). `index.ts`가 모든 모듈 결과를 합산하여 summary를 출력한다.

---

## Task 1: devDependency 추가 및 npm 스크립트 등록

**Files:**
- Modify: `package.json`

- [ ] **Step 1: devDependency 설치**

```bash
yarn add -D tsx turndown js-yaml @types/turndown @types/js-yaml
```

- [ ] **Step 2: package.json scripts 섹션에 4개 추가**

`package.json:21` 의 `clean:ios` 라인 아래에 추가:

```json
    "sync:seed": "tsx scripts/sync-seed-design/index.ts",
    "sync:seed:check": "tsx scripts/sync-seed-design/index.ts --check",
    "preview:icons": "open tools/seed-icons-preview.html",
```

- [ ] **Step 3: 설치 확인**

Run: `yarn tsx --version && yarn turndown --version 2>/dev/null; node -e "require('js-yaml')"`
Expected: tsx 버전 출력, js-yaml require 에러 없음

- [ ] **Step 4: Commit**

```bash
git add package.json yarn.lock
git commit -m "chore: seed-design sync용 devDependency 추가"
```

---

## Task 2: 디렉토리 골격 및 화이트리스트 생성

**Files:**
- Create: `docs/references/seed-design/components/_whitelist.json`
- Create: `docs/references/seed-design/.gitkeep` (다른 빈 폴더용은 sync 스크립트가 채움)

- [ ] **Step 1: 디렉토리 생성**

```bash
mkdir -p docs/references/seed-design/{foundation,components,rootage/components,icons}
mkdir -p scripts/sync-seed-design
mkdir -p tools
mkdir -p .github/workflows
```

- [ ] **Step 2: 화이트리스트 작성**

Create `docs/references/seed-design/components/_whitelist.json`:

```json
{
  "components": [
    "action-button",
    "action-sheet",
    "alert-dialog",
    "bottom-sheet",
    "callout",
    "checkbox",
    "chip",
    "divider",
    "field",
    "inline-banner",
    "list",
    "radio",
    "segmented-control",
    "skeleton",
    "snackbar",
    "switch",
    "tabs",
    "text-input",
    "top-navigation"
  ],
  "foundationPages": [
    "color",
    "typography",
    "spacing",
    "radius",
    "elevation",
    "motion",
    "design-token"
  ]
}
```

- [ ] **Step 3: Commit**

```bash
git add docs/references/seed-design/components/_whitelist.json
git commit -m "feat: seed-design 레퍼런스 화이트리스트 초기화"
```

---

## Task 3: 공용 유틸 — fetch + 파일 쓰기

**Files:**
- Create: `scripts/sync-seed-design/fetch.ts`
- Create: `scripts/sync-seed-design/write.ts`

- [ ] **Step 1: `fetch.ts` 작성**

```typescript
// scripts/sync-seed-design/fetch.ts
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

export async function fetchText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch failed ${res.status} ${url}`);
  return res.text();
}

export async function fetchJson<T = unknown>(url: string): Promise<T> {
  return JSON.parse(await fetchText(url)) as T;
}

/**
 * npm 패키지 tarball을 다운로드하여 임시 디렉토리에 추출하고,
 * 추출된 디렉토리 경로와 cleanup 함수를 반환한다.
 */
export async function downloadNpmPackage(name: string): Promise<{
  dir: string;
  version: string;
  cleanup: () => void;
}> {
  const meta = await fetchJson<{ version: string; dist: { tarball: string } }>(
    `https://registry.npmjs.org/${name}/latest`,
  );
  const tarballRes = await fetch(meta.dist.tarball);
  if (!tarballRes.ok) throw new Error(`tarball fetch failed: ${meta.dist.tarball}`);
  const buf = Buffer.from(await tarballRes.arrayBuffer());
  const tmp = mkdtempSync(join(tmpdir(), 'seed-sync-'));
  const tarPath = join(tmp, 'pkg.tgz');
  await (await import('node:fs/promises')).writeFile(tarPath, buf);
  execFileSync('tar', ['-xzf', tarPath, '-C', tmp], { stdio: 'pipe' });
  return {
    dir: join(tmp, 'package'),
    version: meta.version,
    cleanup: () => rmSync(tmp, { recursive: true, force: true }),
  };
}

export async function readPackageFile(dir: string, relPath: string): Promise<string> {
  return readFile(join(dir, relPath), 'utf8');
}
```

- [ ] **Step 2: `write.ts` 작성**

```typescript
// scripts/sync-seed-design/write.ts
import { mkdir, readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

export interface SyncResult {
  written: string[];
  unchanged: string[];
  removed: string[];
}

export const emptyResult = (): SyncResult => ({ written: [], unchanged: [], removed: [] });

export const mergeResults = (...rs: SyncResult[]): SyncResult => ({
  written: rs.flatMap(r => r.written),
  unchanged: rs.flatMap(r => r.unchanged),
  removed: rs.flatMap(r => r.removed),
});

export interface WriteOptions {
  /** 파일 상단에 자동생성 헤더를 달지 여부 */
  header?: { source: string; fetched: string; commentStyle: 'html' | 'block' | 'hash' };
}

function renderHeader(opts: WriteOptions['header']): string {
  if (!opts) return '';
  const body = `자동 생성됨. 직접 편집하지 마세요.\nsource: ${opts.source}\nfetched: ${opts.fetched}`;
  if (opts.commentStyle === 'html') return `<!--\n${body}\n-->\n`;
  if (opts.commentStyle === 'block') return `/*\n${body}\n*/\n`;
  return body.split('\n').map(l => `# ${l}`).join('\n') + '\n';
}

/**
 * 내용이 동일하면 쓰지 않고 unchanged로 보고. 다르면 written.
 */
export async function writeIfChanged(
  filePath: string,
  body: string,
  opts: WriteOptions = {},
): Promise<SyncResult> {
  const final = (opts.header ? renderHeader(opts.header) + '\n' : '') + body;
  await mkdir(dirname(filePath), { recursive: true });
  if (existsSync(filePath)) {
    const prev = await readFile(filePath, 'utf8');
    if (prev === final) return { written: [], unchanged: [filePath], removed: [] };
  }
  await writeFile(filePath, final);
  return { written: [filePath], unchanged: [], removed: [] };
}

/**
 * 디렉토리 안에서 keepSet에 없는 파일들을 삭제한다.
 * 화이트리스트에서 제거된 컴포넌트의 캐시 파일을 청소하는 데 사용.
 */
export async function pruneDirectory(dir: string, keepSet: Set<string>): Promise<SyncResult> {
  if (!existsSync(dir)) return emptyResult();
  const entries = await readdir(dir, { withFileTypes: true });
  const removed: string[] = [];
  for (const e of entries) {
    if (!e.isFile()) continue;
    const p = join(dir, e.name);
    if (!keepSet.has(p)) {
      await rm(p);
      removed.push(p);
    }
  }
  return { written: [], unchanged: [], removed };
}
```

- [ ] **Step 3: 타입체크**

Run: `yarn tsc --noEmit -p tsconfig.json` (또는 `yarn tsc`)
Expected: 에러 없음

- [ ] **Step 4: Commit**

```bash
git add scripts/sync-seed-design/fetch.ts scripts/sync-seed-design/write.ts
git commit -m "feat(sync-seed): fetch/write 공용 유틸 추가"
```

---

## Task 4: 아이콘 동기화 모듈

**Files:**
- Create: `scripts/sync-seed-design/icons.ts`

브랜드 키워드(`logo`, `karrot`, `daangn`, `brand`)를 포함하는 아이콘 이름을 제외한다.

- [ ] **Step 1: `icons.ts` 작성**

```typescript
// scripts/sync-seed-design/icons.ts
import { join } from 'node:path';
import { downloadNpmPackage, readPackageFile } from './fetch.js';
import { writeIfChanged, mergeResults, type SyncResult } from './write.js';

const BRAND_KEYWORDS = ['logo', 'karrot', 'daangn', 'brand'];
const OUT_DIR = 'docs/references/seed-design/icons';

function isBrandIcon(name: string): boolean {
  const n = name.toLowerCase();
  return BRAND_KEYWORDS.some(kw => n.includes(kw));
}

function filterIcons(raw: Record<string, unknown>): Record<string, unknown> {
  const filtered: Record<string, unknown> = {};
  for (const [name, data] of Object.entries(raw)) {
    if (!isBrandIcon(name)) filtered[name] = data;
  }
  return filtered;
}

export async function syncIcons(): Promise<SyncResult> {
  const pkg = await downloadNpmPackage('@karrotmarket/icon-data');
  try {
    const monoRaw = JSON.parse(await readPackageFile(pkg.dir, 'monochrome.json'));
    const multiRaw = JSON.parse(await readPackageFile(pkg.dir, 'multicolor.json'));
    const mono = filterIcons(monoRaw);
    const multi = filterIcons(multiRaw);

    const fetched = new Date().toISOString();
    const meta = {
      package: '@karrotmarket/icon-data',
      version: pkg.version,
      source: 'https://www.npmjs.com/package/@karrotmarket/icon-data',
      fetched,
      counts: {
        monochrome: Object.keys(mono).length,
        multicolor: Object.keys(multi).length,
      },
      excludedBrandKeywords: BRAND_KEYWORDS,
    };

    return mergeResults(
      await writeIfChanged(join(OUT_DIR, 'monochrome.json'), JSON.stringify(mono, null, 2)),
      await writeIfChanged(join(OUT_DIR, 'multicolor.json'), JSON.stringify(multi, null, 2)),
      await writeIfChanged(join(OUT_DIR, '_meta.json'), JSON.stringify(meta, null, 2)),
    );
  } finally {
    pkg.cleanup();
  }
}
```

- [ ] **Step 2: 타입체크**

Run: `yarn tsc`
Expected: 에러 없음

- [ ] **Step 3: 단독 실행으로 동작 확인**

다음 명령으로 임시 실행:

```bash
yarn tsx -e "import('./scripts/sync-seed-design/icons.ts').then(m => m.syncIcons()).then(r => console.log({written: r.written.length, unchanged: r.unchanged.length}))"
```

Expected: `monochrome.json`, `multicolor.json`, `_meta.json` 3개 파일이 `docs/references/seed-design/icons/`에 생성됨. 출력 `{written: 3, unchanged: 0}`.

- [ ] **Step 4: 브랜드 키워드 필터 확인**

```bash
node -e "const m=require('./docs/references/seed-design/icons/monochrome.json'); console.log(Object.keys(m).filter(k=>/logo|karrot|daangn|brand/i.test(k)))"
```

Expected: `[]` (빈 배열)

- [ ] **Step 5: Commit**

```bash
git add scripts/sync-seed-design/icons.ts docs/references/seed-design/icons/
git commit -m "feat(sync-seed): 아이콘 동기화 모듈 + 첫 캐시"
```

---

## Task 5: rootage 토큰 + 컴포넌트 동기화 모듈

**Files:**
- Create: `scripts/sync-seed-design/rootage.ts`

GitHub raw에서 YAML을 가져와 JSON으로 변환한다.

- [ ] **Step 1: `rootage.ts` 작성**

```typescript
// scripts/sync-seed-design/rootage.ts
import { join } from 'node:path';
import yaml from 'js-yaml';
import { fetchText } from './fetch.js';
import { writeIfChanged, mergeResults, pruneDirectory, type SyncResult } from './write.js';

const REPO_RAW = 'https://raw.githubusercontent.com/daangn/seed-design/dev/packages/rootage';
const TOKEN_FILES = [
  'color', 'font-size', 'font-weight', 'line-height',
  'dimension', 'radius', 'shadow', 'gradient',
  'duration', 'timing-function', 'collections',
] as const;

const ROOTAGE_DIR = 'docs/references/seed-design/rootage';
const COMP_DIR = `${ROOTAGE_DIR}/components`;

export async function syncRootageTokens(): Promise<SyncResult> {
  const results: SyncResult[] = [];
  for (const name of TOKEN_FILES) {
    const url = `${REPO_RAW}/${name}.yaml`;
    let body: string;
    try {
      body = await fetchText(url);
    } catch (e) {
      console.warn(`[rootage] skip ${name}: ${(e as Error).message}`);
      continue;
    }
    const json = yaml.load(body);
    results.push(
      await writeIfChanged(
        join(ROOTAGE_DIR, `${name}.json`),
        JSON.stringify(json, null, 2),
      ),
    );
  }
  return mergeResults(...results);
}

export async function syncRootageComponents(componentNames: string[]): Promise<SyncResult> {
  const results: SyncResult[] = [];
  const keep = new Set<string>();
  for (const name of componentNames) {
    const url = `${REPO_RAW}/components/${name}.yaml`;
    let body: string;
    try {
      body = await fetchText(url);
    } catch (e) {
      console.warn(`[rootage] component ${name} not found: ${(e as Error).message}`);
      continue;
    }
    const json = yaml.load(body);
    const out = join(COMP_DIR, `${name}.json`);
    keep.add(out);
    results.push(await writeIfChanged(out, JSON.stringify(json, null, 2)));
  }
  results.push(await pruneDirectory(COMP_DIR, keep));
  return mergeResults(...results);
}
```

- [ ] **Step 2: 타입체크**

Run: `yarn tsc`
Expected: 에러 없음

- [ ] **Step 3: 단독 실행으로 토큰 동기화 확인**

```bash
yarn tsx -e "import('./scripts/sync-seed-design/rootage.ts').then(m => m.syncRootageTokens()).then(r => console.log(r))"
```

Expected: `docs/references/seed-design/rootage/`에 `color.json`, `font-size.json` 등 다수 JSON 생성. (네트워크 가능한 일부만 받아질 수도 있음 — 경고만 보고 계속 진행)

- [ ] **Step 4: 컴포넌트 동기화 확인**

```bash
yarn tsx -e "import('./scripts/sync-seed-design/rootage.ts').then(m => m.syncRootageComponents(['switch','checkbox'])).then(r => console.log(r))"
```

Expected: `rootage/components/switch.json`, `checkbox.json` 생성

- [ ] **Step 5: Commit**

```bash
git add scripts/sync-seed-design/rootage.ts docs/references/seed-design/rootage/
git commit -m "feat(sync-seed): rootage 토큰/컴포넌트 동기화 모듈"
```

---

## Task 6: 가이드 페이지 동기화 모듈 (foundation + components)

**Files:**
- Create: `scripts/sync-seed-design/guides.ts`

`seed-design.io` HTML을 마크다운으로 변환한다.

- [ ] **Step 1: `guides.ts` 작성**

```typescript
// scripts/sync-seed-design/guides.ts
import { join } from 'node:path';
import TurndownService from 'turndown';
import { fetchText } from './fetch.js';
import { writeIfChanged, mergeResults, pruneDirectory, type SyncResult } from './write.js';

const FOUNDATION_DIR = 'docs/references/seed-design/foundation';
const COMPONENTS_DIR = 'docs/references/seed-design/components';

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

/**
 * seed-design.io 페이지 HTML에서 본문 영역만 추출.
 * 사이트 구조 변경에 fail-loud로 대응하기 위해, <main> 또는
 * <article> 중 하나가 반드시 존재해야 한다.
 */
function extractMain(html: string): string {
  const match = html.match(/<main[\s\S]*?<\/main>|<article[\s\S]*?<\/article>/i);
  if (!match) {
    throw new Error('seed-design.io 페이지 구조 변경 감지: <main>/<article> 없음');
  }
  return match[0];
}

async function syncGuide(url: string, outPath: string): Promise<SyncResult> {
  let html: string;
  try {
    html = await fetchText(url);
  } catch (e) {
    console.warn(`[guides] skip ${url}: ${(e as Error).message}`);
    return { written: [], unchanged: [], removed: [] };
  }
  const main = extractMain(html);
  const md = turndown.turndown(main).trim() + '\n';
  return writeIfChanged(outPath, md, {
    header: {
      source: url,
      fetched: new Date().toISOString(),
      commentStyle: 'html',
    },
  });
}

export async function syncFoundation(pages: string[]): Promise<SyncResult> {
  const keep = new Set<string>();
  const results: SyncResult[] = [];
  for (const page of pages) {
    const out = join(FOUNDATION_DIR, `${page}.md`);
    keep.add(out);
    results.push(await syncGuide(`https://seed-design.io/docs/foundation/${page}`, out));
  }
  results.push(await pruneDirectory(FOUNDATION_DIR, keep));
  return mergeResults(...results);
}

export async function syncComponentGuides(names: string[]): Promise<SyncResult> {
  // _whitelist.json은 보존
  const keep = new Set<string>([join(COMPONENTS_DIR, '_whitelist.json')]);
  const results: SyncResult[] = [];
  for (const name of names) {
    const out = join(COMPONENTS_DIR, `${name}.md`);
    keep.add(out);
    results.push(await syncGuide(`https://seed-design.io/docs/components/${name}`, out));
  }
  results.push(await pruneDirectory(COMPONENTS_DIR, keep));
  return mergeResults(...results);
}
```

- [ ] **Step 2: 타입체크**

Run: `yarn tsc`
Expected: 에러 없음

- [ ] **Step 3: 단독 실행으로 동작 확인 (1개 페이지만)**

```bash
yarn tsx -e "import('./scripts/sync-seed-design/guides.ts').then(m => m.syncFoundation(['color'])).then(r => console.log(r))"
yarn tsx -e "import('./scripts/sync-seed-design/guides.ts').then(m => m.syncComponentGuides(['switch'])).then(r => console.log(r))"
```

Expected: `foundation/color.md`, `components/switch.md` 생성. 파일 상단에 `<!-- 자동 생성됨... -->` 헤더 존재. 본문이 마크다운으로 변환됨.

- [ ] **Step 4: 헤더 확인**

```bash
head -5 docs/references/seed-design/foundation/color.md
```

Expected: `<!--`로 시작, `source: https://seed-design.io/...` 라인 포함

- [ ] **Step 5: Commit**

```bash
git add scripts/sync-seed-design/guides.ts docs/references/seed-design/foundation/ docs/references/seed-design/components/
git commit -m "feat(sync-seed): 가이드 페이지 HTML→MD 동기화 모듈"
```

---

## Task 7: INDEX.md + LICENSE-NOTICE.md 생성 모듈

**Files:**
- Create: `scripts/sync-seed-design/index-md.ts`
- Create: `scripts/sync-seed-design/license.ts`

- [ ] **Step 1: `index-md.ts` 작성**

```typescript
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

\`rootage/\` 폴더에 \`color.json\`, \`font-size.json\`, \`dimension.yaml\` 등 원본 YAML이 JSON으로 변환되어 보관됨. 원본은 https://github.com/daangn/seed-design/tree/dev/packages/rootage.

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
```

- [ ] **Step 2: `license.ts` 작성**

```typescript
// scripts/sync-seed-design/license.ts
import { writeIfChanged, type SyncResult } from './write.js';

const OUT = 'docs/references/seed-design/LICENSE-NOTICE.md';

export async function writeLicense(): Promise<SyncResult> {
  const body = `# Third-Party Notices

This directory contains content derived from third-party design system resources:

- **@karrotmarket/icon-data** — MIT License — Copyright (c) Daangn
  Source: https://www.npmjs.com/package/@karrotmarket/icon-data
- **@seed-design/rootage** — Apache-2.0 License — Copyright (c) Daangn
  Source: https://github.com/daangn/seed-design
- **seed-design.io documentation** — Apache-2.0 License — Copyright (c) Daangn
  Source: https://seed-design.io

Brand-marked icons (names containing \`logo\`, \`karrot\`, \`daangn\`, \`brand\`) are excluded from the cached set and must not be used.
`;
  return writeIfChanged(OUT, body);
}
```

- [ ] **Step 3: 타입체크**

Run: `yarn tsc`
Expected: 에러 없음

- [ ] **Step 4: Commit**

```bash
git add scripts/sync-seed-design/index-md.ts scripts/sync-seed-design/license.ts
git commit -m "feat(sync-seed): INDEX/LICENSE 생성 모듈"
```

---

## Task 8: CLI 엔트리포인트 (`index.ts`)

**Files:**
- Create: `scripts/sync-seed-design/index.ts`

`--check` 모드는 변경이 있으면 비-제로 종료. 기본 모드는 변경 적용 후 0으로 종료. 항상 summary 출력.

- [ ] **Step 1: `index.ts` 작성**

```typescript
// scripts/sync-seed-design/index.ts
import { readFile } from 'node:fs/promises';
import { syncIcons } from './icons.js';
import { syncRootageTokens, syncRootageComponents } from './rootage.js';
import { syncFoundation, syncComponentGuides } from './guides.js';
import { writeIndex } from './index-md.js';
import { writeLicense } from './license.js';
import { mergeResults, type SyncResult } from './write.js';

interface Whitelist {
  components: string[];
  foundationPages: string[];
}

async function loadWhitelist(): Promise<Whitelist> {
  const raw = await readFile(
    'docs/references/seed-design/components/_whitelist.json',
    'utf8',
  );
  return JSON.parse(raw) as Whitelist;
}

function printSummary(r: SyncResult): void {
  console.log(`\n=== sync-seed-design summary ===`);
  console.log(`written:   ${r.written.length}`);
  console.log(`unchanged: ${r.unchanged.length}`);
  console.log(`removed:   ${r.removed.length}`);
  if (r.written.length) {
    console.log('\n[written]');
    r.written.forEach(p => console.log('  + ' + p));
  }
  if (r.removed.length) {
    console.log('\n[removed]');
    r.removed.forEach(p => console.log('  - ' + p));
  }
}

async function main(): Promise<void> {
  const checkMode = process.argv.includes('--check');
  const wl = await loadWhitelist();

  const iconRes = await syncIcons();
  const tokRes = await syncRootageTokens();
  const compSpecRes = await syncRootageComponents(wl.components);
  const foundRes = await syncFoundation(wl.foundationPages);
  const compGuideRes = await syncComponentGuides(wl.components);
  const licRes = await writeLicense();

  // INDEX는 아이콘 메타가 필요하므로 마지막에
  const meta = JSON.parse(
    await readFile('docs/references/seed-design/icons/_meta.json', 'utf8'),
  );
  const idxRes = await writeIndex({
    components: wl.components,
    foundationPages: wl.foundationPages,
    iconCounts: {
      monochrome: meta.counts.monochrome,
      multicolor: meta.counts.multicolor,
      version: meta.version,
    },
  });

  const total = mergeResults(
    iconRes, tokRes, compSpecRes, foundRes, compGuideRes, licRes, idxRes,
  );
  printSummary(total);

  const changed = total.written.length + total.removed.length;
  if (checkMode && changed > 0) {
    console.error(`\n--check: ${changed} file(s) would change. exit 1.`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(2);
});
```

- [ ] **Step 2: 타입체크**

Run: `yarn tsc`
Expected: 에러 없음

- [ ] **Step 3: Commit (실행은 Task 12에서)**

```bash
git add scripts/sync-seed-design/index.ts
git commit -m "feat(sync-seed): CLI 엔트리포인트"
```

---

## Task 9: 아이콘 미리보기 HTML 이전 + 로컬 데이터 소스화

**Files:**
- Create: `tools/seed-icons-preview.html`

`/tmp/seed-icons-preview.html`의 다크/라이트 토글 + 검색 + 필터 기능을 그대로 가져오되, 데이터 소스를 jsDelivr → 로컬 JSON으로 변경.

- [ ] **Step 1: HTML 작성**

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<title>seed-design icons preview (local)</title>
<style>
  :root, [data-theme="dark"] {
    --bg: #0f1115; --panel: #161922; --border: #262b36;
    --text: #e6e8ee; --muted: #8b93a7; --accent: #ff7a00;
    --card-bg: #161922; --input-bg: #0b0d12;
  }
  [data-theme="light"] {
    --bg: #f5f6f8; --panel: #ffffff; --border: #e3e6ec;
    --text: #1a1d24; --muted: #6b7280; --accent: #ff7a00;
    --card-bg: #ffffff; --input-bg: #ffffff;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Pretendard", "Apple SD Gothic Neo", sans-serif; }
  header { position: sticky; top: 0; z-index: 10; background: var(--panel); border-bottom: 1px solid var(--border); padding: 12px 16px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
  header h1 { font-size: 14px; margin: 0 8px 0 0; font-weight: 600; }
  header .meta { color: var(--muted); font-size: 12px; }
  input[type=search] { flex: 1; min-width: 220px; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--input-bg); color: var(--text); }
  .seg { display: inline-flex; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
  .seg button { background: transparent; color: var(--text); border: 0; padding: 7px 12px; cursor: pointer; font-size: 13px; }
  .seg button.active { background: var(--accent); color: #111; font-weight: 600; }
  main { padding: 16px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; }
  .card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 12px 8px; display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; transition: border-color .15s; }
  .card:hover { border-color: var(--accent); }
  .card .iconwrap { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; }
  .card svg { width: 36px; height: 36px; fill: currentColor; color: var(--text); }
  .card .name { font-size: 11px; color: var(--muted); word-break: break-all; text-align: center; line-height: 1.3; }
  .card.copied { border-color: var(--accent); }
  .card.copied .name { color: var(--accent); }
  .empty { color: var(--muted); text-align: center; padding: 60px 20px; }
  .loading { color: var(--muted); padding: 40px; text-align: center; }
</style>
</head>
<body data-theme="dark">
<header>
  <h1>seed-design icons</h1>
  <div class="seg" id="filter">
    <button data-type="all" class="active">All</button>
    <button data-type="mono">Monochrome</button>
    <button data-type="multi">Multicolor</button>
  </div>
  <div class="seg" id="theme">
    <button data-theme="dark" class="active">Dark</button>
    <button data-theme="light">Light</button>
  </div>
  <input id="q" type="search" placeholder="이름 검색 (예: arrow, chat, person)" />
  <span class="meta" id="count">로딩 중…</span>
</header>
<main>
  <div id="grid" class="grid"><div class="loading">아이콘 데이터를 가져오는 중입니다…</div></div>
</main>
<script>
const MONO_URL = "../docs/references/seed-design/icons/monochrome.json";
const MULTI_URL = "../docs/references/seed-design/icons/multicolor.json";

let allItems = [];
let currentType = "all";

async function load() {
  const [mono, multi] = await Promise.all([
    fetch(MONO_URL).then(r => r.json()),
    fetch(MULTI_URL).then(r => r.json()),
  ]);
  const monoArr = Object.entries(mono).map(([name, v]) => ({ name, svg: v.svg, type: "mono" }));
  const multiArr = Object.entries(multi).map(([name, v]) => ({ name, svg: v.svg, type: "multi" }));
  allItems = [...monoArr, ...multiArr];
  render();
}

function render() {
  const q = document.getElementById("q").value.trim().toLowerCase();
  const filtered = allItems.filter(i => {
    if (currentType !== "all" && i.type !== currentType) return false;
    if (q && !i.name.toLowerCase().includes(q)) return false;
    return true;
  });
  document.getElementById("count").textContent = filtered.length + " / " + allItems.length;
  const grid = document.getElementById("grid");
  if (filtered.length === 0) { grid.innerHTML = '<div class="empty">결과 없음</div>'; return; }
  grid.innerHTML = filtered.map(i =>
    '<div class="card" data-name="' + i.name + '"><div class="iconwrap">' + i.svg + '</div><div class="name">' + i.name + '</div></div>'
  ).join("");
}

document.getElementById("q").addEventListener("input", render);
document.getElementById("filter").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  currentType = e.target.dataset.type;
  document.querySelectorAll("#filter button").forEach(b => b.classList.toggle("active", b === e.target));
  render();
});
document.getElementById("theme").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  document.body.dataset.theme = e.target.dataset.theme;
  document.querySelectorAll("#theme button").forEach(b => b.classList.toggle("active", b === e.target));
});
document.getElementById("grid").addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;
  navigator.clipboard.writeText(card.dataset.name).then(() => {
    card.classList.add("copied");
    setTimeout(() => card.classList.remove("copied"), 800);
  });
});

load().catch(err => {
  document.getElementById("grid").innerHTML = '<div class="empty">로드 실패: ' + err.message + '<br>먼저 <code>yarn sync:seed</code>를 실행해 아이콘 JSON을 생성하세요.</div>';
});
</script>
</body>
</html>
```

- [ ] **Step 2: 브라우저로 열어 확인**

Run: `open tools/seed-icons-preview.html`
Expected: 그리드 렌더링 성공. 다크/라이트 토글 작동. 검색 작동.

(file:// 환경에서 fetch가 차단되면 `python3 -m http.server -d . 8000` 후 `http://localhost:8000/tools/seed-icons-preview.html`로 확인)

- [ ] **Step 3: Commit**

```bash
git add tools/seed-icons-preview.html
git commit -m "feat: seed-design 아이콘 미리보기 HTML (로컬 데이터)"
```

---

## Task 10: CLAUDE.md 작성

**Files:**
- Create: `CLAUDE.md` (없는 경우) 또는 Modify

- [ ] **Step 1: 기존 파일 확인**

Run: `ls CLAUDE.md 2>/dev/null && echo exists || echo new`

- [ ] **Step 2: 신규 작성 (없는 경우) 또는 섹션 추가**

신규 작성하는 경우 다음 내용으로 `CLAUDE.md` 생성. 기존 파일이 있으면 아래 `## Design Reference: seed-design` 섹션을 파일 끝에 append.

```markdown
# duologue-app — Claude 가이드

## Design Reference: seed-design

duologue는 자체 브랜드(Lime/Purple/Aqua)를 유지한다. seed-design은 **참조 자료**로만 사용한다.

- 디자인·UI 결정 시 우선 \`docs/references/seed-design/INDEX.md\`를 본다.
- 컴포넌트 스펙은 \`docs/references/seed-design/components/<name>.md\`와
  \`rootage/components/<name>.json\` 참고.
- 토큰을 그대로 import하지 말 것. 시맨틱 구조·네이밍·state 분기 규칙만 차용한다.
- 로컬 캐시에 없으면 \`docs/references/seed-design/components/_whitelist.json\`에
  추가 후 다음 sync에서 자동 반영. 사용자가 즉시 필요시 \`yarn sync:seed\` 실행.
- 사용자에게 디자인 제안 시 참조한 원본 URL을 함께 명시
  (예: \`https://seed-design.io/docs/components/switch\`).
- seed-design의 컴포넌트 코드(\`@seed-design/react\`)는 RN에서 동작하지 않으므로
  코드 자체를 가져오지 않는다.
- 당근 브랜드성 아이콘(logo/karrot/daangn 키워드)은 사용 금지.
```

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(claude): seed-design 참조 규칙 추가"
```

---

## Task 11: GitHub Actions 워크플로우

**Files:**
- Create: `.github/workflows/sync-seed-design.yml`

- [ ] **Step 1: 워크플로우 작성**

```yaml
# .github/workflows/sync-seed-design.yml
name: Sync seed-design references

on:
  schedule:
    # 매주 월요일 09:00 KST = 월요일 00:00 UTC
    - cron: '0 0 * * 1'
  workflow_dispatch:

permissions:
  contents: write
  pull-requests: write

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Run sync
        id: sync
        run: |
          yarn sync:seed | tee sync-output.txt

      - name: Compute summary
        id: summary
        run: |
          {
            echo 'body<<EOF'
            echo '## seed-design 참조 동기화'
            echo
            echo '자동 동기화 결과:'
            echo
            echo '```'
            tail -n 60 sync-output.txt
            echo '```'
            echo
            echo '> 이 PR은 매주 월요일 09:00 KST 자동 생성됩니다.'
            echo EOF
          } >> "$GITHUB_OUTPUT"

      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v7
        with:
          commit-message: "chore: sync seed-design refs"
          title: "chore: sync seed-design refs (${{ github.run_number }})"
          body: ${{ steps.summary.outputs.body }}
          branch: chore/sync-seed-design
          delete-branch: true
          labels: |
            dependencies
            seed-design
          add-paths: |
            docs/references/seed-design/**
            tools/seed-icons-preview.html
```

- [ ] **Step 2: yaml 문법 확인**

Run: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/sync-seed-design.yml'))"`
Expected: 에러 없음

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/sync-seed-design.yml
git commit -m "ci: seed-design 주간 동기화 워크플로우"
```

---

## Task 12: 첫 전체 실행 + 검증

이전 task 들에서 모듈별 단독 실행으로 일부 파일이 생성되어 있을 수 있음. 이번에 전체 실행으로 INDEX.md/LICENSE-NOTICE.md까지 채우고 멱등성을 검증한다.

- [ ] **Step 1: 전체 동기화 실행**

Run: `yarn sync:seed`
Expected: summary에 `written` ≥ 1, 에러 없이 종료. 각 디렉토리에 파일 존재.

- [ ] **Step 2: 멱등성 확인 (즉시 한 번 더 실행)**

Run: `yarn sync:seed`
Expected: summary `written: 0, removed: 0`, `unchanged`만 증가.

- [ ] **Step 3: --check 모드 확인**

Run: `yarn sync:seed:check`
Expected: 변경 없음 → exit 0

- [ ] **Step 4: 출력물 점검 (눈으로 확인)**

확인 항목:
- `docs/references/seed-design/INDEX.md`: 화이트리스트 컴포넌트/파운데이션 페이지 표가 채워져 있고 외부 URL이 클릭 가능한 형태
- `docs/references/seed-design/icons/_meta.json`: `version`, `counts.monochrome`, `counts.multicolor` 존재
- `docs/references/seed-design/foundation/color.md`: 마크다운 본문이 있고 상단에 `<!-- 자동 생성됨... -->` 헤더
- `docs/references/seed-design/components/switch.md`: 위와 동일
- `docs/references/seed-design/rootage/color.json`: JSON 형태의 토큰 데이터
- `docs/references/seed-design/rootage/components/switch.json`: JSON 형태의 컴포넌트 스펙
- `docs/references/seed-design/LICENSE-NOTICE.md`: 세 출처가 모두 명시됨

- [ ] **Step 5: 미리보기 HTML 동작 확인**

Run: `open tools/seed-icons-preview.html`
Expected: 모노/멀티 합산 600여 개 아이콘 그리드 렌더링, 다크/라이트 토글 작동.

- [ ] **Step 6: 변경 일괄 커밋**

```bash
git add docs/references/seed-design/
git commit -m "feat: seed-design 참조 캐시 초기 동기화 결과"
```

- [ ] **Step 7: develop 브랜치에 push**

```bash
git push origin develop
```

- [ ] **Step 8: GitHub Actions 수동 실행 검증**

GitHub UI에서 Actions → "Sync seed-design references" → "Run workflow" 클릭하여 develop에서 수동 트리거.
Expected: 워크플로우 성공. 변경이 없으므로 PR은 생성되지 않음 ("No changes to commit" 로그). 변경이 있는 경우 PR이 생성됨.

---

## 후속 작업 (이 계획 외 / 별도 spec 필요)

- 기존 `styles/tokens.ts`/`tamagui.config.ts` 시맨틱을 seed-design 패턴 참고해 재정렬
- duologue 컴포넌트들의 prop·variant 재설계
- 아이콘 RN 코드젠 (선택 아이콘들을 `react-native-svg` 컴포넌트로 변환)
- 앱 내 오픈소스 고지 화면에 `@karrotmarket/icon-data — MIT — Daangn` 추가
