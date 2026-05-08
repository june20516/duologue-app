// scripts/sync-seed-design/index.ts
import { readFile } from 'node:fs/promises';

import { syncFoundation, syncComponentGuides } from './guides.js';
import { syncIcons } from './icons.js';
import { writeIndex } from './index-md.js';
import { writeLicense } from './license.js';
import { syncRootageTokens, syncRootageComponents } from './rootage.js';
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
