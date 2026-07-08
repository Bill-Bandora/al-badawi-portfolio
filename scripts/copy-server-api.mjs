import { cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve('server/api');
const target = resolve('dist/api');

if (existsSync(source)) {
  await mkdir(target, { recursive: true });
  await cp(source, target, { recursive: true });
  console.log('Copied PHP API files to dist/api');
}
