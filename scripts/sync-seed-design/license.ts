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
