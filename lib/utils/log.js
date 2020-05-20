const LOG_MESSAGES = {
  noFiles: () => `⚠️ No files to convert!`,
  complete: () => '✨ Your files have been converted and compressed!',
  converted: (fileName) => `🎬 Converted ${fileName} to gif!`,
  squashing: (count) => `🐘 Squashing ${count} files!`,
};

function log(message) {
  console.log(message);
}

export default {
  noFiles: () => log(LOG_MESSAGES.noFiles()),
  complete: () => log(LOG_MESSAGES.complete()),
  converted: (fileName) => log(LOG_MESSAGES.squashing(fileName)),
  squashing: (count) => log(LOG_MESSAGES.squashing(count)),
};
