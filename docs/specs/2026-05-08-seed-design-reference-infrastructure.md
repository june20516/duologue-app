# seed-design 레퍼런스 인프라 구축

- **Date:** 2026-05-08
- **Status:** Draft (사용자 리뷰 대기)
- **Owner:** Bran

## 목적

당근(daangn)의 [seed-design](https://seed-design.io) 디자인 시스템을 duologue-app의 **참조 자료(레퍼런스)** 로 꾸준히 활용하기 위한 인프라를 구축한다. duologue는 자체 브랜드(Lime/Purple/Aqua)와 자체 토큰 체계를 이미 갖추고 있으므로, seed-design을 그대로 import하지 않고 **시맨틱 구조·컴포넌트 스펙·UX 가이드라인·아이콘**을 발췌해 로컬에 캐시하고 자동 갱신한다.

## 배경

- duologue-app: React Native + Expo + Tamagui 기반. `tamagui.config.ts` + `styles/tokens.ts`로 자체 디자인 시스템 운영 중.
- seed-design은 React/CSS 기반 — RN에서 컴포넌트 코드를 직접 사용 불가.
- 주체: Claude(주), 사용자(중간 개입). 사용자는 폴더에서 직접 열람 + 원본 URL을 통해 검증할 수 있어야 함.
- 제약: "신경 쓰지 않아도 되는" 갱신, 과한 작업 회피.

## 활용 영역

| 영역 | 대상 |
|---|---|
| 시맨틱·토큰 구조 레퍼런스 | rootage YAML (color/typography/spacing/radius 등) |
| 컴포넌트 스펙 레퍼런스 | rootage components (state별 토큰 매핑 포함) |
| UX 가이드라인 / 디자인 원칙 | seed-design.io의 foundation·components 페이지 |
| 아이콘 (모노크롬 + 멀티컬러) | `@karrotmarket/icon-data` (브랜드 아이콘 제외) |
| Figma 워크플로우 | (제외) |

## In Scope

- 로컬 캐시 디렉토리 `docs/references/seed-design/` 구성
- sync 스크립트 `scripts/sync-seed-design.ts`
- GitHub Actions 주간 cron + 자동 PR
- 아이콘 미리보기 HTML `tools/seed-icons-preview.html`
- `CLAUDE.md`에 활용 규칙 추가
- 라이센스 attribution 자동 생성

## Out of Scope (별도 후속 프로젝트)

- 기존 `styles/tokens.ts` / `tamagui.config.ts`의 시맨틱 재정렬
- duologue 컴포넌트의 prop·variant 재설계
- 아이콘 RN 코드젠 (`react-native-svg` 컴포넌트화)
- 앱 내 오픈소스 고지 화면 갱신
- MCP 등록 (필요해지면 그때 추가)

## 디렉토리 구조

```
duologue-app/
├── docs/
│   └── references/
│       └── seed-design/
│           ├── INDEX.md                  # 사람용 진입점, 자동 생성
│           ├── LICENSE-NOTICE.md         # 자동 생성
│           ├── foundation/<page>.md      # 화이트리스트 기반
│           ├── components/
│           │   ├── _whitelist.json       # 사람이 관리 (유일한 수동 파일)
│           │   └── <name>.md             # 화이트리스트 기반
│           ├── rootage/
│           │   ├── <token>.json
│           │   └── components/<name>.json
│           └── icons/
│               ├── monochrome.json
│               ├── multicolor.json
│               └── _meta.json            # 패키지 버전 + 생성일자
├── scripts/
│   └── sync-seed-design.ts
├── tools/
│   └── seed-icons-preview.html
└── .github/
    └── workflows/
        └── sync-seed-design.yml
```

자동 생성 파일은 모두 상단에 다음 헤더를 포함한다:

```
<!-- 자동 생성됨. 직접 편집하지 마세요.
     source: <원본 URL>
     fetched: <ISO 8601 날짜> -->
```

## sync 스크립트 (`scripts/sync-seed-design.ts`)

**입력 소스 (모두 공개):**
| 소스 | URL | 용도 |
|---|---|---|
| `@karrotmarket/icon-data` | npm registry | 아이콘 SVG/메타 |
| `@seed-design/rootage` | npm registry / GitHub raw | 토큰·컴포넌트 스펙 |
| `seed-design.io` | https://seed-design.io | 가이드라인 본문 |

**처리 단계:**
1. **아이콘** — `@karrotmarket/icon-data` 최신 tarball fetch → 브랜드 키워드(`logo`, `karrot`, `daangn`, `brand`) 포함 항목 제외 → `icons/monochrome.json` / `multicolor.json` 저장 + `icons/_meta.json`에 패키지 버전·생성일자 기록.
2. **rootage 토큰** — `@seed-design/rootage`의 루트 YAML(`color.yaml`, `font-size.yaml`, `font-weight.yaml`, `line-height.yaml`, `dimension.yaml`, `radius.yaml`, `shadow.yaml`, `gradient.yaml`, `duration.yaml`, `timing-function.yaml`, `collections.yaml`)을 JSON으로 변환해 원본 파일명 그대로 `rootage/<name>.json`으로 저장.
3. **rootage 컴포넌트 스펙** — `_whitelist.json`의 `components` 항목별로 `packages/rootage/components/<name>.yaml`을 가져와 JSON 변환 후 `rootage/components/<name>.json`에 저장.
4. **파운데이션 가이드** — `_whitelist.json`의 `foundationPages` 항목별로 `https://seed-design.io/docs/foundation/<page>` HTML을 fetch → 마크다운 변환(`turndown`) → `foundation/<page>.md`에 저장.
5. **컴포넌트 가이드** — 동일 방식으로 `https://seed-design.io/docs/components/<name>` → `components/<name>.md`.
6. **INDEX.md 갱신** — 캐시된 모든 파일과 외부 원본 URL의 매핑을 표로 자동 재생성.
7. **LICENSE-NOTICE.md 갱신** — 고정 템플릿으로 작성.
8. 출력 파일이 변경되지 않으면 종료. 변경되면 git status로 잡힘.

**기술 스택:**
- TypeScript + `tsx`로 실행 (`yarn tsx scripts/sync-seed-design.ts`)
- 의존: `turndown` (HTML→MD), `js-yaml` (YAML→JSON). 둘 다 devDependency.
- 외부 패키지는 `npm pack` 또는 registry tarball을 직접 fetch하여 한시적 추출 (devDeps 추가 없이 처리)

**npm 스크립트:**
```json
{
  "scripts": {
    "sync:seed": "tsx scripts/sync-seed-design.ts",
    "sync:seed:check": "tsx scripts/sync-seed-design.ts --check",
    "preview:icons": "open tools/seed-icons-preview.html"
  }
}
```

## 화이트리스트 (`docs/references/seed-design/components/_whitelist.json`)

수동으로 관리되는 유일한 파일. 초기값:

```json
{
  "components": [
    "action-button", "action-sheet", "alert-dialog", "bottom-sheet",
    "callout", "checkbox", "chip", "divider", "field", "inline-banner",
    "list", "radio", "segmented-control", "skeleton", "snackbar",
    "switch", "tabs", "text-input", "top-navigation"
  ],
  "foundationPages": [
    "color", "typography", "spacing", "radius",
    "elevation", "motion", "design-token"
  ]
}
```

당근 도메인 색이 강한 항목(`manner-temp`, `reaction-button`, `image-frame`, `identity-placeholder` 등)은 초기 제외. 필요해지면 사용자가 직접 추가.

## GitHub Actions (`.github/workflows/sync-seed-design.yml`)

**트리거:**
- 매주 월요일 09:00 KST (cron `0 0 * * 1` UTC)
- `workflow_dispatch` (수동 실행)

**동작:**
1. checkout → Node 20 + `yarn install --immutable`
2. `yarn sync:seed` 실행
3. `git diff --quiet docs/references/seed-design tools/seed-icons-preview.html` 변경 감지
4. 변경 없음 → 종료
5. 변경 있음 → `peter-evans/create-pull-request`로 PR 생성
   - 브랜치: `chore/sync-seed-design-YYYYMMDD`
   - 제목: `chore: sync seed-design refs (YYYY-MM-DD)`
   - 본문: sync 스크립트의 stdout diff summary (추가/변경/삭제된 파일 목록)
   - 라벨: `dependencies`, `seed-design`
6. **권한:** `permissions: { contents: write, pull-requests: write }` — `GITHUB_TOKEN`만 사용, PAT 불필요.

## 아이콘 미리보기 (`tools/seed-icons-preview.html`)

- `/tmp`에 있던 기존 미리보기를 `tools/`로 이동.
- 데이터 소스를 jsDelivr → 상대경로 로컬 JSON으로 변경:
  - `../docs/references/seed-design/icons/monochrome.json`
  - `../docs/references/seed-design/icons/multicolor.json`
- 기능 유지: 다크/라이트 토글, 검색, 모노/멀티 필터, 카드 클릭 → 이름 클립보드 복사.
- 데이터가 캐시와 동일 → 항상 일치, 오프라인 OK.

## CLAUDE.md 규칙 추가

루트에 `CLAUDE.md`가 없으면 신규 생성, 있으면 다음 섹션 추가:

```markdown
## Design Reference: seed-design

duologue는 자체 브랜드(Lime/Purple/Aqua)를 유지한다. seed-design은 **참조 자료**로만 사용한다.
- 디자인·UI 결정 시 우선 `docs/references/seed-design/INDEX.md`를 본다.
- 컴포넌트 스펙은 `docs/references/seed-design/components/<name>.md`와
  `rootage/components/<name>.json` 참고.
- 토큰을 그대로 import하지 말 것. 시맨틱 구조·네이밍·state 분기 규칙만 차용.
- 로컬 캐시에 없으면 `_whitelist.json`에 추가 후 다음 sync에서 자동 반영.
  사용자가 즉시 필요시 `yarn sync:seed` 실행.
- 사용자에게 디자인 제안 시 참조한 원본 URL을 함께 명시
  (예: https://seed-design.io/docs/components/switch).
- seed-design의 컴포넌트 코드(@seed-design/react)는 RN에서 동작하지 않으므로
  코드 자체를 가져오지 않는다.
- 당근 브랜드성 아이콘(logo/karrot/daangn 키워드)은 사용 금지.
```

## 라이센스 Attribution

`docs/references/seed-design/LICENSE-NOTICE.md` (자동 생성):

```markdown
# Third-Party Notices

This directory contains content derived from:

- **@karrotmarket/icon-data** — MIT License — Copyright (c) Daangn
  Source: https://www.npmjs.com/package/@karrotmarket/icon-data
- **@seed-design/rootage** — Apache-2.0 License — Copyright (c) Daangn
  Source: https://github.com/daangn/seed-design
- **seed-design.io documentation** — Apache-2.0 License — Copyright (c) Daangn
  Source: https://seed-design.io

Brand-marked icons (logos containing "karrot", "daangn", "당근") are excluded.
```

앱 내 오픈소스 고지 화면 반영은 본 스코프 외(별도 후속).

## 사용자 개입 경로

- **빠른 열람:** `docs/references/seed-design/INDEX.md` 진입 → 외부 원본 URL 링크 따라가기
- **아이콘 시각 확인:** `yarn preview:icons` 또는 직접 `tools/seed-icons-preview.html` 열기
- **즉시 갱신:** `yarn sync:seed`
- **변경 확인만:** `yarn sync:seed:check`
- **화이트리스트 조정:** `docs/references/seed-design/components/_whitelist.json` 편집 → 다음 sync에서 반영
- **자동 PR 머지:** GitHub PR 알림 → 머지 1클릭

## 검증 기준

- `yarn sync:seed`가 깨끗한 상태에서 실행 시 변경 없이 종료
- 화이트리스트에 새 컴포넌트 추가 시 다음 실행에서 해당 파일 생성
- GitHub Actions 수동 실행(`workflow_dispatch`)이 성공하고, 변경 없으면 PR 생성 안 함
- 미리보기 HTML이 로컬 JSON으로 정상 렌더링되며 다크/라이트 토글 작동
- `LICENSE-NOTICE.md`에 세 출처가 모두 포함됨
- 브랜드 키워드 아이콘이 `monochrome.json`/`multicolor.json`에 없음

## 의존성 추가 (devDependency)

- `tsx` — 스크립트 실행 (이미 있을 가능성 있음, 확인 필요)
- `turndown` — HTML → 마크다운
- `js-yaml` + `@types/js-yaml` — YAML → JSON

런타임 번들 영향 없음.

## 리스크 / 알려진 한계

- seed-design 사이트의 HTML 구조가 바뀌면 마크다운 변환 결과가 깨질 수 있음 → sync 스크립트가 변환 실패를 fail-loud로 처리하고 PR 본문에 명시.
- `@seed-design/rootage` 패키지가 npm에 publish되지 않은 경우, GitHub raw에서 직접 YAML 가져오기로 폴백.
- npm 패키지 버전이 갑자기 메이저 점프하여 스키마가 바뀌면 sync 스크립트 일부 수정 필요 (PR review 시점에 발견).
