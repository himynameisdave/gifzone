import listFiles from '../utils/list-files.js';
import stripExtension, { stripExtensions } from '../utils/strip-extension.js';


async function getFilesToConvert(inputPath, outputPath) {
  const inputFiles = await listFiles(inputPath);
  const outputFiles = await listFiles(outputPath);
  const outputFilesNoExtension = stripExtensions(outputFiles);
  //  Remove any input files which already exist in output
  return inputFiles.filter(file => !outputFilesNoExtension.includes(stripExtension(file)));
}

export default getFilesToConvert;
