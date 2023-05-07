const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, 'secret-folder');
fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
  files.forEach(file => {
    if (file.isFile()) {
      fs.stat(path.join(dirPath, file.name), (err, stats) => {
        const sizeFile = stats.size.toString();
        console.log(`${path.basename(file.name, path.extname(file.name))} - ${path.extname(file.name).slice(1)} - ${sizeFile}`)
      })
    }
  })
})