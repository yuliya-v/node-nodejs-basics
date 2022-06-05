import { getPath } from "../utils.js";
import path from 'path';
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";


export const compress = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const pathToOutput = path.join(__dirname, 'files', 'archive.gz');
  const encoding = 'utf-8';
  const readStream = createReadStream(pathToFile, encoding);
  const writeStream = createWriteStream(pathToOutput);
  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

compress();
