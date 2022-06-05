import { spawn } from 'child_process';
import path from 'path';
import { stdin } from 'process';
import { getPath } from '../utils.js';
import process from 'process';

export const spawnChildProcess = async (args) => {
  const { __dirname } = getPath(import.meta.url);
  const pathToScript = path.join(__dirname, 'files', 'script.js');
  const child = spawn('node', [ pathToScript, ...args]);

  child.stdout.pipe(process.stdout);
  stdin.pipe(child.stdin);
};

spawnChildProcess(['аргумент', 'аргументик']);
