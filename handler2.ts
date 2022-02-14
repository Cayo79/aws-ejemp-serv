const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hola Jorge como estaiiiis!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hola ruta from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
