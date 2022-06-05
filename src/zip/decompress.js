import { getPath } from "../utils.js";
import path from 'path';
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

export const decompress = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToArchive = path.join(__dirname, 'files', 'archive.gz');
  const pathToOutput = path.join(__dirname, 'files', 'fileToCompress.txt');

  const readStream = createReadStream(pathToArchive);
  const writeStream = createWriteStream(pathToOutput);
  const unzip = createUnzip();

  readStream.pipe(unzip).pipe(writeStream);
  
};

decompress();