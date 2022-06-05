import { readFile } from 'fs/promises';
import path from 'path';
import { fsErrorMessage, getPath } from "../utils.js";

export const read = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
  const encoding = 'utf-8';

  try {
    const data = await readFile(pathToFile, encoding);
    console.log(data);
  } catch {
    fsErrorMessage();
  }
};

read();