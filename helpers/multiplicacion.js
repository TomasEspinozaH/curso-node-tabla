const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 0, list = false, hasta = 10) => {
  try {
    let out = '';

    for (let i = 1; i <= hasta; i++) {
      out += `${base}  X  ${i}  =  ${i * base}\n`;
    }

    if (list) {
      console.log('========================'.green);
      console.log(colors.green('    TABLA DEL:', base));
      console.log('========================'.green);
      console.log(out);
    }
    fs.writeFileSync(`./tables/tabla-${base}.txt`, out);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile
};
