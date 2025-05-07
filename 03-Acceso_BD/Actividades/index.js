const express = require("express");
const app = express();
const { buscarUsuario, agregarUsuario } = require("./usuarios");

app.use(express.json());

app.listen(3000, console.log("Server Arriba"));

app.get("/usuarios", async (req, res) => {
  const { email } = req.body;
  const users = await buscarUsuario(email);

  res.json(users);
});

app.post("/usuarios", async (req, res) => {
  const { email, password } = req.body;
  await agregarUsuario(email, password);

  res.send("Usuario agregado con éxito.");
});
