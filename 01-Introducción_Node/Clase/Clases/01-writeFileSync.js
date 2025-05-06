// Hola Mundo
// console.log("Hola Node JS");

// const fs = require("fs");

// const tareas = `
//     1. Ir al Gimanasio
//     2. Buscar al niño al colegio
//     3. Pagar los gastos comunes
// `;

// fs.writeFileSync("tareas.txt", tareas);

// const fs = require("fs");

// const tareas = [
//   {
//     text: "1. Ir al Gimanasio",
//   },
//   {
//     text: "2. Buscar al niño al colegio",
//   },
//   {
//     text: "3. Pagar los gastos comunes",
//   },
//   {
//     text: "4. Cargar Bencina"
//   }
// ];

// fs.writeFileSync("tareas.json", JSON.stringify(tareas));

// Ejercicio 1
//Ejecuta un script que cree un archivo JSON con el método writeFileSync y el siguiente arreglo de objetos:

const fs = require("fs");

const autos = [
  {
    marca: "Susuki",
    modelo: "Kicks",
  },
  {
    marca: "Toyota",
    modelo: "Corola",
  },
  {
    marca: "GAC",
    modelo: "GS4",
  },
];

fs.writeFileSync("Autos.json", JSON.stringify(autos));
