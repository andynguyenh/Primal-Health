const express = require("express");
const axios = require("axios");
// const config = require("../config.js");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

// const functions = require("firebase-functions");
// const { getAllTodos } = require('../functions/APIs/todos.js')

// app.get('https://us-central1-primal-health.cloudfunctions.net/api/todos', (req, res) => {

// })


app.get('/todos', (req, res) => {
  // getAllTodos()
  // .then(data => {
  //   res.send('got the request')
  //   console.log(data);
  // })
  // .catch(err => {
  //   console.log(err);
  // });
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
