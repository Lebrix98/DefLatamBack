const fs = require("fs");

const createFile = (nameFile, content) => {
  fs.writeFileSync(nameFile, content);

  console.log(`Archivo fue creado con exito.`);
};

const readFile = (nameFile) => {
  const anime = fs.readFileSync(nameFile, "utf8");

  JSON.parse(anime).forEach((ani) => {
    console.log(ani);
  });

  console.log(`Datos dentro del archivo.`);
};

const resetFile = (nameFile) => {
  fs.writeFileSync(nameFile, "[]");

  console.log(`Archivo fue limpiado.`);
};

module.exports = { createFile, readFile, resetFile };
