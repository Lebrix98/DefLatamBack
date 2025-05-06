const { register, read, reset } = require("./operaciones.js");

const operacion = process.argv.slice(2);

const mascotas = {
  nombre : operacion[1],
  edad : operacion[2],
  animal : operacion[3],
  color : operacion[4],
  enfermedad : operacion[5]
}

if (operacion[0] === "registrar") {
  register(mascotas);
}

if (operacion[0] === "leer") {
  read();
}

if (operacion[0] === "limpiar") {
  reset();
}
