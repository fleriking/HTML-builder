const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'text.txt');
fs.writeFile(filePath, '', err => { });

process.stdout.write('Hello, say some!\n');
process.stdin.on('data', data => {
  try {
    if (data.toString().trim() == 'exit') {
      process.stdout.write('Good bye');
      process.exit();
    } else {
      fs.appendFile(filePath, data, 'utf-8', err => { });
    }
    
  } catch (error) {
    console.log(error);
    process.stdout.write('Good bye');
  }
});
process.on('SIGINT', () => {
  process.stdout.write('Good bye');
  process.exit();
});

