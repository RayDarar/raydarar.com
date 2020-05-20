require("dotenv").config();

const express = require("express");
const join = require("path").join;
const history = require("connect-history-api-fallback");
// const enforce = require("express-sslify");

const app = express();
const PORT = process.env.PORT || 3000;
const STATIC = join(__dirname, "public");

// enforce https
// if (process.env.PROD) app.use(enforce.HTTPS({ trustProtoHeader: true }));

app
  .use(history())
  .use(express.static(STATIC))
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
