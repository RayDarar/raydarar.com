require("dotenv").config();
const http = require("http");

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request at ${req.url}`);
  next();
});

app.get("/api/health", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/health/sum", (req, res) => {
  const { first, second } = req.query;
  console.log(req.query);
  
  res.send({
    result: parseInt(first) + parseInt(second),
  });
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server runs at port ${PORT}`));

process.on("SIGINT", () => {
  server.close();
});
