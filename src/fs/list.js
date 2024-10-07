import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesFolder = path.join(__dirname, 'files');

const list = async () => {
  try {
    await fsPromises.access(filesFolder);
    const files = await fsPromises.readdir(filesFolder);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
