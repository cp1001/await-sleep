// nodejs > 7.6
// const sleep = require('util').promisify(setTimeout);

// commonJS
module.exports = m => new Promise(r => setTimeout(r, m));
