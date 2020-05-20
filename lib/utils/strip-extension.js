
//  Strips the file extension from a filename
function stripExtension(file) {
  const splitOnDot = file.split('.');
  return splitOnDot
    .slice(0, splitOnDot.length - 1)
    .join('.');
}

//  For doing a whole array
export function stripExtensions(files) {
  return files.map(stripExtension);
}

export default stripExtension;
