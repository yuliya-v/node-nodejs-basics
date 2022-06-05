import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import { getPath } from "../utils.js";

export const calculateHash = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const encoding = 'utf-8';

  try {
    const data = await readFile(pathToFile, encoding);
    const hash = createHash('sha256')
      .update(data)
      .digest('hex');
    console.log(hash);
    return hash;
  } catch(err) {
    console.error(err);
  }
};

calculateHash();
