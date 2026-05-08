import { join } from 'node:path';

import { load as yamlLoad } from 'js-yaml';

import { fetchText } from './fetch.js';
import { mergeResults, pruneDirectory, type SyncResult, writeIfChanged } from './write.js';

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
    const json = yamlLoad(body);
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
    const json = yamlLoad(body);
    const out = join(COMP_DIR, `${name}.json`);
    keep.add(out);
    results.push(await writeIfChanged(out, JSON.stringify(json, null, 2)));
  }
  results.push(await pruneDirectory(COMP_DIR, keep));
  return mergeResults(...results);
}
