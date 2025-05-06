const { agregarViaje, registroViaje } = require("./consultas");
const {
  agregarEquipamiento,
  registroEquipamiento,
  deleteEquipamiento,
} = require("./equipamiento");

const express = require("express");
const app = express();

const fs = require("fs");

// Port 3000
app.listen(3000, console.log("Server arriba!!"));

// Middleware
app.use(express.json());

// Method GET
app.get("/viajes", async (req, res) => {
  const viajes = await registroViaje();

  res.json(viajes);
});

app.get("/equipamiento", async (req, res) => {
  const equipamiento = await registroEquipamiento();

  res.json(equipamiento);
});

// Method POST
app.post("/viajes", async (req, res) => {
  const { destino, presupuesto } = req.body;
  await agregarViaje(destino, presupuesto);
  res.send("Viaje agregado con Exito.");
});

app.post("/equipamiento", async (req, res) => {
  const { nombre } = req.body;
  await agregarEquipamiento(nombre);
  res.send("Equipamiento agregado con Exito.");
});
