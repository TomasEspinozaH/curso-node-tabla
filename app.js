const { createFile } = require('./helpers/multiplicacion');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

console.log(argv);

const { b, l, h } = argv;

createFile(b, l, h)
  .then(successMessage => console.log(successMessage.rainbow, 'creada'))
  .catch(messageError => console.log(messageError));
