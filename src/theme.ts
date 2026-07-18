import { parse } from 'smol-toml';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const toml = readFileSync(resolve(process.cwd(), 'theme.toml'), 'utf-8');
const config: Record<string, any> = parse(toml);
export default config;
