const path = require('path');
const { readdir, readFile } = require('fs/promises');
const fs = require('fs');

const DIST_DIR = path.join(__dirname, 'project-dist');
const DIST_BUNDLE = path.join(__dirname, 'project-dist', 'bundle.css');
const COPY_CSS = path.join(__dirname, 'styles');



function bundle(filePath, fromDir) {
  fs.writeFile(filePath, '', err => { });

  readdir(fromDir, { withFileTypes: true })
    .then(files => {

      files.forEach(file => {
        if (path.extname(file.name) == '.css') {
          readFile(path.join(COPY_CSS, file.name),{encoding: 'utf-8'})
            .then(fileContent => {

              fs.appendFile(filePath, fileContent,'utf-8', err => { });
              fs.appendFile(filePath, '\n','utf-8', err => { });
            })

        }
      })
    })
}

bundle(DIST_BUNDLE, COPY_CSS);

module.exports.bundle = bundle;


