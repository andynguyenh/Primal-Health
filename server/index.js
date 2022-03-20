const express = require("express");
// const cors = require('cors');
// const bodyParser = require('body-parser');
const controller = require('../controllers/todos.js');

const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
app.get('/todos', controller.getTodos)





app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
