// const fs = require("fs");

// const tareas = fs.readFileSync("tareas.json", "utf8");

// // console.log(tareas);

// JSON.parse(tareas).forEach((tarea) => {
//   console.log(tarea);
// });

// Ejercicio 2
//Ejecuta un script que lea el archivo JSON creado en el ejercicio anterior con el método readFileSync.
// Además de parsear su contenido e imprimir cada uno de los autos por consola

const fs = require("fs");

const autos = fs.readFileSync("Autos.json", "utf8");

JSON.parse(autos).forEach((auto) => {
  console.log(auto);
});
