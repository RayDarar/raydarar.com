const express = require("express");
const join = require("path").join;
const history = require("connect-history-api-fallback");

const PORT = process.env.PORT || 3000;
const STATIC = join(__dirname, "public");

express()
  .use(history())
  .use(express.static(STATIC))
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
