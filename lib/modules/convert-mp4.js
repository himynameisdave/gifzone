import path from 'path';
import execa from 'execa';
import stripExtension from '../utils/strip-extension.js';
import log from '../utils/log.js';
import { INPUT_PATH, OUTPUT_PATH } from '../constants.js';


async function convertMp4(file) {
  const inputPath = path.join(INPUT_PATH, file);
  const rootFileName = stripExtension(file);
  const outputFileName = `${rootFileName}.gif`;
  const outputPath = path.join(OUTPUT_PATH, outputFileName);
  await execa('ffmpeg', ['-i', inputPath, '-f', 'gif', outputPath]);
  log.converted(rootFileName);
}

export default convertMp4;
