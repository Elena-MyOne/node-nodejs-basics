import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFileToCreate = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  fs.writeFile(pathToFileToCreate, 'I am fresh and young', (error, data) => {
    if (error) throw 'FS operation failed';
    console.log(data);
  });
};

await create();
