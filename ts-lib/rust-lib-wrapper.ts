import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import type * as RustLibTypes from 'rust-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const requireNative = createRequire(import.meta.url);
const libPath = path.join(__dirname, '../rust-lib/index.js');
const nativeRust = requireNative.call(null, libPath) as typeof RustLibTypes;

export default nativeRust;
