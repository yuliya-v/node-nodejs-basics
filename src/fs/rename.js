import { readFile, rename as change } from 'fs/promises';
import path from 'path';
import { fsErrorMessage, getPath } from '../utils.js';

export const rename = async () => {
  const { __dirname } = getPath(import.meta.url);
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await readFile(newPath);
  } catch {
    try {
      await change(oldPath, newPath);
      return;
    } catch {
      fsErrorMessage();
    }
  }
  fsErrorMessage();
};

rename();
