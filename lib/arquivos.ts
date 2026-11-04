import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

/** Confere, no build, se um arquivo opcional foi colocado em public/images. */
export function existeImagem(arquivo: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', 'images', arquivo));
  } catch {
    return false;
  }
}
