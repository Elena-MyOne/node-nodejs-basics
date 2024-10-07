import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  if (!fs.existsSync(fileToRemove)) {
    throw new Error('FS operation failed');
  }

  try {
    await fsPromises.unlink(fileToRemove);
    console.log('File "fileToRemove.txt" deleted!');
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
