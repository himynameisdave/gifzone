import path from 'path';
import imagemin from 'imagemin';
import imageminGifCompress from 'imagemin-giflossy';
import { OUTPUT_PATH } from '../constants.js';
import log from '../utils/log.js';
import { stripExtensions } from '../utils/strip-extension.js';

const outputAsGif = file => path.join(OUTPUT_PATH, `${file}.gif`);

async function compressGifs(files) {
  const outputFiles = stripExtensions(files).map(outputAsGif);
  log.squashing(outputFiles.length);
  await imagemin(outputFiles, {
    destination: OUTPUT_PATH,
    glob: false,
		plugins: [
			imageminGifCompress({
        optimizationLevel: 3, // Max
        lossy: 180,
      }),
		]
	});
}

export default compressGifs;
