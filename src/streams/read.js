import process from 'process';
import { createReadStream } from 'fs';
import path from 'path';
import { getPath } from '../utils.js';

export const read = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
  const encoding = 'utf-8';
  const stream = createReadStream(pathToFile, encoding);
  
  stream.on('data', (chunk) => process.stdout.write(chunk));
  stream.on('end', () => process.stdout.write('\n\n'));
};

read();
