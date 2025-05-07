const express = require("express");
const app = express();

//Imports
const { listAll, listByID, addElement } = require("./database");

// Port
app.listen(3000, console.log("Server Up"));

// Middleware
app.use(express.json());

//Methods HTTPS

//GET
app.get("/", async () => {});

//GET BY ID
app.get("/", async () => {});

//POST
app.post("/", async () => {});
