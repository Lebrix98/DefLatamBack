const express = require("express");
const app = express();

app.listen(3000, console.log("Servidor Arriba"));

app.get("/home", (req, res) => {
  res.send("Hello World Express JS");
});
