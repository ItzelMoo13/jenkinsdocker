"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send({
    "Nombre 1": "Itzel",
    "Matrícula 1 ": "32002367",
    "Nombre 2": "Andrea",
    "Matrícula 2": "2354789",
    "Nombre 3": "Moo",
    "Matrícula 3": "19223653",
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
