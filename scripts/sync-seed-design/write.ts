import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

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

function stripHeader(content: string, style: 'html' | 'block' | 'hash'): string {
  if (style === 'html') return content.replace(/^<!--[\s\S]*?-->\n\n?/, '');
  if (style === 'block') return content.replace(/^\/\*[\s\S]*?\*\/\n\n?/, '');
  return content.replace(/^(?:# [^\n]*\n)+\n?/, '');
}

/**
 * 내용이 동일하면 쓰지 않고 unchanged로 보고. 다르면 written.
 * 헤더를 포함한 경우, 기존 파일의 헤더를 제외한 body 부분만 비교하여 멱등성을 보장한다.
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
    const prevBody = opts.header ? stripHeader(prev, opts.header.commentStyle) : prev;
    if (prevBody === body) return { written: [], unchanged: [filePath], removed: [] };
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
