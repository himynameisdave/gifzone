import getFilesToConvert from './modules/get-files-to-convert.js';
import convertMp4 from './modules/convert-mp4.js';
import compressGifs from './modules/compress-gifs.js';
import log from './utils/log.js';
import { INPUT_PATH, OUTPUT_PATH } from './constants.js';


async function main() {
  const filesToConvert = await getFilesToConvert(INPUT_PATH, OUTPUT_PATH);
  if (!filesToConvert || filesToConvert.length === 0) {
    log.noFiles();
    return;
  }

  for (let file of filesToConvert) {
    await convertMp4(file);
  }

  await compressGifs(filesToConvert);

  return log.complete();
};

main();
