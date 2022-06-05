import path from 'path';
import { fsErrorMessage, getPath } from '../utils.js';
import { rm } from 'fs/promises';

export const remove = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(pathToFile);
  } catch {
    fsErrorMessage();
  }
};

remove();