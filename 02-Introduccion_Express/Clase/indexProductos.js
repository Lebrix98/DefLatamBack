const fs = require('fs');

const obj = [
    {
        id: 1,
        nombre: "Audifonos",
        precio: 18990
    },
    {
        id: 2,
        nombre: "Aro de Luz",
        precio: 21990
    }
]

fs.writeFileSync("productos.json", JSON.stringify(obj))