import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  fs.rename(
    path.join(__dirname, 'files', 'wrongFilename.txt'),
    path.join(__dirname, 'files', 'properFilename.md'),
    (error, data) => {
      if (error) throw new Error('FS operation failed');
      console.log('File "wrongFilename.txt" renamed into "properFilename.md"');
    }
  );
};

await rename();
