import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  fs.readFile(pathToFileToRead, 'utf-8', (error, data) => {
    if (error) throw 'FS operation failed';
    console.log(data);
  });
};

await read();
