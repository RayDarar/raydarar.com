require("dotenv").config();

const http = require("http");
const express = require("express");
const io = require("./socket");
const bot = require("./bot");

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
  res.send({
    result: parseInt(first) + parseInt(second),
  });
});

app.get("/api/metrics/users", (req, res) => {
  res.send({
    result: io.getUsers(),
  });
});

const server = http.createServer(app);
io.configure(server);
bot.start();

server.listen(PORT, () => console.log(`Server runs at port ${PORT}`));

process.on("SIGINT", () => {
  server.close();
  bot.stop();
  process.exit(0);
});
