import fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);

//  Dir should be full path
function listFiles(directory) {
  return readdir(directory);
}

export default listFiles;
