const express = require("express");
const fs = require("fs");

// Enrutador
const app = express();

// Fijar Puerto
app.listen(3000, console.log("Server arriba."));

// Middleware =>  Lectura del Body => Procesar Payload
app.use(express.json());

// Method GET
app.get("/perfil", (req, res) => {
  res.send("Jorge Ignacio Díaz Loyola");
});

app.get("/productos", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("productos.json"));
  res.json(productos);
});

app.get("/usuarios", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));

  res.json(usuarios);
});

// Method POST
app.post("/productos", (req, res) => {
  // Lo que llega del Payload
  const producto = req.body;
  // JSON con la Data
  const productos = JSON.parse(fs.readFileSync("productos.json"));
  // Agregar el prod que llega a la data
  productos.push(producto);
  // Sobreescribir
  fs.writeFileSync("productos.json", JSON.stringify(productos));
  // Msj de éxito
  res.send("Producto agregado con éxito.");
});

app.post("/usuarios", (req, res) => {
  const user = req.body;
  const users = JSON.parse(fs.readFileSync("usuarios.json"));
  users.push(user);

  fs.writeFileSync("usuarios.json", JSON.stringify(users));
  res.send("Usuarios agregado con éxito.");
});

// Method DELETE
app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  const productos = JSON.parse(fs.readFileSync("productos.json"));

  const index = productos.findIndex((elem) => elem.id == id);

  productos.splice(index, 1);

  fs.writeFileSync("productos.json", JSON.stringify(productos));
  res.send("Producto eliminado con éxito.");
});

app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));

  const index = usuarios.findIndex((elem) => elem.id == id);

  usuarios.splice(index, 1);

  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));
  res.send("Usuario eliminado con éxito");
});

// Method PUT
app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const producto = req.body;

  const productos = JSON.parse(fs.readFileSync("productos.json"));

  const index = productos.findIndex((elem) => elem.id == id);

  productos[index] = producto;

  fs.writeFileSync("productos.json", JSON.stringify(productos));
  res.send("Producto modificado con éxito.");
});

app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const usuario = req.body;

  const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));

  const index = usuarios.findIndex((elem) => elem.id == id);

  usuarios[index] = usuario;

  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));
  res.send("Usuario modificado con éxito.");
});
