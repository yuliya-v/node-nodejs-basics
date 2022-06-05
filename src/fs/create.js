import * as path from 'path';
import { mkdir, opendir, readFile, writeFile } from 'fs/promises';
import { fsErrorMessage, getPath } from '../utils.js';

export const create = async () => {
  const data = 'I am fresh and young';
  const { __dirname } = getPath(import.meta.url);
  const pathToFolder = path.join(__dirname, 'files');
  const pathToFile = path.join(pathToFolder, 'text.txt'); 

  try {
    await readFile(pathToFile);
  } catch {
    try {
      await opendir(pathToFolder);
    } catch {
      await mkdir(pathToFolder);
    }
    await writeFile(pathToFile, data);
    return;
  }
  
  fsErrorMessage();
};

create();