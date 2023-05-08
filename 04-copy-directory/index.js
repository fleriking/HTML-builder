const path = require('path');
const { mkdir, rm, copyFile, stat, readdir } = require('fs/promises');

const CURR_DIR = path.join(__dirname, 'files');
const COPY_DIR = path.join(__dirname, 'files-copy');

rm(COPY_DIR, { recursive: true, force: true })
  .then(() => copyDir(CURR_DIR, COPY_DIR));

function copyDir(currDir, copyDir) {
  mkdir(copyDir)
    .then(() => {
      readdir(currDir)
        .then((items) => {
          items.forEach(item => {
            recursiveCopy(path.join(currDir, item), path.join(copyDir, item));
          })
        })
    })

}

function recursiveCopy(fromDir, toDir) {
  stat(fromDir)
    .then((statFile) => {
      if (statFile.isFile()) {
        return copyFile(fromDir, toDir);
      } else {
        return copyDir(fromDir, toDir);
      }
    })
}

module.exports.recursiveCopy = recursiveCopy;
module.exports.copyDir = copyDir;

