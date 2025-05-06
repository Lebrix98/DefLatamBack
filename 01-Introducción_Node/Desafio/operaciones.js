const fs = require("fs");

const register = (mascotas) => {
  const data = fs.readFileSync("Citas.json", "utf-8");
  const mascota = JSON.parse(data);

  mascota.push(mascotas);

  fs.writeFileSync("Citas.json", JSON.stringify(mascota, null, 2));

  console.log("Animal registrado con exito.");
};

const read = () => {
  const cita = fs.readFileSync("Citas.json", "utf8");

  console.log(JSON.parse(cita));
};

const reset = () => {
  fs.writeFileSync("Citas.json", "[]");
};

module.exports = { register, read, reset };