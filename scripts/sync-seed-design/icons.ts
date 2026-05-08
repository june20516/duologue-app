import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
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

    const metaPath = join(OUT_DIR, '_meta.json');
    const counts = {
      monochrome: Object.keys(mono).length,
      multicolor: Object.keys(multi).length,
    };
    // 버전·카운트가 동일하면 기존 fetched 타임스탬프 보존(멱등성).
    let fetched = new Date().toISOString();
    if (existsSync(metaPath)) {
      try {
        const prev = JSON.parse(await readFile(metaPath, 'utf8'));
        if (
          prev.version === pkg.version &&
          prev.counts?.monochrome === counts.monochrome &&
          prev.counts?.multicolor === counts.multicolor
        ) {
          fetched = prev.fetched;
        }
      } catch {
        // 손상된 파일은 그냥 새 타임스탬프로 덮어씀
      }
    }
    const meta = {
      package: '@karrotmarket/icon-data',
      version: pkg.version,
      source: 'https://www.npmjs.com/package/@karrotmarket/icon-data',
      fetched,
      counts,
      excludedBrandKeywords: BRAND_KEYWORDS,
    };

    return mergeResults(
      await writeIfChanged(join(OUT_DIR, 'monochrome.json'), JSON.stringify(mono, null, 2)),
      await writeIfChanged(join(OUT_DIR, 'multicolor.json'), JSON.stringify(multi, null, 2)),
      await writeIfChanged(metaPath, JSON.stringify(meta, null, 2)),
    );
  } finally {
    pkg.cleanup();
  }
}
