const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;



express()
  .get('/*', (req, res) => res.sendFile('index.html'))
  .use(express.static(path.join(__dirname, "public")))
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
