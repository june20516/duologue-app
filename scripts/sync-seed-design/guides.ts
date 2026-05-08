import { join } from 'node:path';

import TurndownService from 'turndown';

import { fetchText } from './fetch.js';
import { mergeResults, pruneDirectory, writeIfChanged, type SyncResult } from './write.js';

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
