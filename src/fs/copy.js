import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesFolder = path.join(__dirname, 'files');
const copyFolder = path.join(__dirname, 'files_copy');

const copyFolderContent = async (filesFolder, copyFolder) => {
  const entries = await fsPromises.readdir(filesFolder, { withFileTypes: true });

  for (const entry of entries) {
    const filesPath = path.join(filesFolder, entry.name);
    const copyPath = path.join(copyFolder, entry.name);

    if (entry.isDirectory()) {
      await fsPromises.mkdir(copyPath);
      await copyFolderContent(filesPath, copyPath);
    } else {
      await fsPromises.copyFile(filesPath, copyPath);
    }
  }
  console.log('Folder copied!');
};

const copy = async () => {
  if (fs.existsSync(copyFolder)) {
    throw new Error('FS operation failed');
  }

  try {
    await fsPromises.access(filesFolder);
    console.log(filesFolder);
  } catch {
    throw new Error('FS operation failed');
  }

  await fsPromises.mkdir(copyFolder);
  await copyFolderContent(filesFolder, copyFolder);
};

await copy();
