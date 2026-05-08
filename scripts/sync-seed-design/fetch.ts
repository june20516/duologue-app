import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

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
  try {
    const tarPath = join(tmp, 'pkg.tgz');
    await writeFile(tarPath, buf);
    execFileSync('tar', ['-xzf', tarPath, '-C', tmp], { stdio: 'pipe' });
  } catch (error) {
    rmSync(tmp, { recursive: true, force: true });
    throw error;
  }
  return {
    dir: join(tmp, 'package'),
    version: meta.version,
    cleanup: () => rmSync(tmp, { recursive: true, force: true }),
  };
}

export async function readPackageFile(dir: string, relPath: string): Promise<string> {
  return readFile(join(dir, relPath), 'utf8');
}
