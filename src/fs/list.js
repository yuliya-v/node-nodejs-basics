import path from 'path';
import { fsErrorMessage, getPath } from '../utils.js';
import { readdir } from 'fs/promises';

export const list = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToDir = path.join(__dirname, 'files');

  try {
    const data = await readdir(pathToDir);
    console.log(data);
  } catch {
    fsErrorMessage();
  }
};

list();
