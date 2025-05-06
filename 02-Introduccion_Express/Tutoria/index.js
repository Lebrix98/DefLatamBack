const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, console.log("Server arriba port 3000"));

app.get("/usuarios", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync("./mockdata/users.json"));

  res.json(usuarios);
});
