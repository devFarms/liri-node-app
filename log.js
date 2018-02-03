var fs = require('fs');

function log(line) {
  fs.appendFile('log.txt', line + "\n", (err) => {
    if (err) throw err;
  });
}

module.exports = log;