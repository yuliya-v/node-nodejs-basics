import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { createRequire } from "module";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const url = import.meta.url;

const require = createRequire(url);

const __filename = fileURLToPath(url);

const __dirname = dirname(__filename);

const random = Math.random();

export const unknownObject = random > 0.5 ? require('./files/a.json') : require('./files/b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});
