const fs = require('fs');

const users = [
    {
        id: 1,
        nombre: "Jorge",
        team: "Vue JS"
    },
    {
        id: 2,
        nombre: "Juan",
        team: "React JS"
    }
]

fs.writeFileSync("usuarios.json", JSON.stringify(users))