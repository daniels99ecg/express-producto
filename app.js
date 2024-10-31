const express = require("express");
const cors = require("cors");
const resApi = require("./src/router/index");

const app = express();
app.use(express.json());

app.use(cors());
resApi(app);

app.listen(3001, () => {
  console.log("Server in line :)");
});
