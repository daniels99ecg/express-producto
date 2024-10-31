const item = require("./items/items");

function ResApi(app) {
  app.use("/item", item);
}

module.exports = ResApi;
