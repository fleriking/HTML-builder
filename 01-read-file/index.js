const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname,'text.txt');
const readStream = fs.createReadStream(filePath,'utf-8');
readStream.pipe(process.stdout);