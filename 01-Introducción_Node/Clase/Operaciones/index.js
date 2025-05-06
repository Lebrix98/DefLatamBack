const { createFile, readFile, resetFile } = require("./operaciones.js");

const animes = [
  {
    id: 1,
    name: "One Piece",
    status: "Emisión",
  },
  {
    id: 2,
    name: "Black Clover",
    status: "Finalizado",
  },
  {
    id: 3,
    name: "The Beginning after the end",
    status: "Emisión",
  },
];

/* Crear Datos */
// createFile("Animes.json", JSON.stringify(animes));

/* Leer Datos */
// readFile("Animes.json");

/* Limpiar Datos */
// resetFile("Animes.json");
