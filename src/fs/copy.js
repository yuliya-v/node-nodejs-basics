import { copyFile, mkdir, opendir, readdir } from 'fs/promises';
import * as path from 'path';
import { fsErrorMessage, getPath } from '../utils.js';

const copyFolder = async (pathToFolder, pathToFolderCopy) => {
  const filesData = await readdir(pathToFolder, { withFileTypes: true });

  filesData.forEach(dirent => {
    if (dirent.isFile()) {
        const pathToFile = path.join(pathToFolder, dirent.name);
        const pathToFileCopy = path.join(pathToFolderCopy, dirent.name);
        copyFile(pathToFile, pathToFileCopy);
    } else if (dirent.isDirectory()) {
      const pathToDir = path.join(pathToFolder, dirent.name);
      const pathToDirCopy = path.join(pathToFolderCopy, dirent.name);
      copyFolder(pathToDir, pathToDirCopy);
    }
  })
}

export const copy = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToFolder = path.join(__dirname, 'files');
  const pathToFolderCopy = path.join(__dirname, 'files_copy');

  try {
    await Promise.all([opendir(pathToFolder), mkdir(pathToFolderCopy)]);
    await copyFolder(pathToFolder, pathToFolderCopy);
  } catch {
    fsErrorMessage();
  }
};

copy();