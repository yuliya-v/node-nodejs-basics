import process from 'process';
import { createWriteStream } from 'fs';
import path from 'path';
import { stdin, stdout } from 'process';
import { getPath } from '../utils.js';

export const write = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
  
  const output = createWriteStream(pathToFile);

  stdout.write('Введите ваш текст:\n');

  stdin.on('data', (data) => {
    output.write(data);
  })

  process.on('SIGINT', () => {
    stdout.write('\nТекст сохранён в файле "fileToWrite.txt".\n');
    process.exit();
});
};

write();
