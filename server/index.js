require("dotenv").config();

const http = require("http");
const express = require("express");
const bot = require("./bot");

const app = express();
const PORT = 3000;

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

const server = http.createServer(app);
bot.start();

server.listen(PORT, () => console.log(`Server runs at port ${PORT}`));

// Listen on a specific host via the HOST environment variable
const host = "0.0.0.0";
const port = 8081;

const cors_proxy = require("cors-anywhere");
const proxyServer = cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });

process.on("SIGINT", () => {
  server.close();
  proxyServer.close();
  bot.stop();
  process.exit(0);
});
