const express = require("express");
const axios = require("axios");
const config = require("../config.js");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
