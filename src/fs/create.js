import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFileToCreate = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  if (fs.existsSync(pathToFileToCreate)) {
    throw new Error('FS operation failed');
  }

  fs.writeFile(pathToFileToCreate, 'I am fresh and young', (error, data) => {
    if (error) throw new Error('FS operation failed');
    console.log('File "fresh.txt" created');
  });
};

await create();
