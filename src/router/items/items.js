const Router = require("express").Router();
const itemController = require("../../controller/item/itemController");

Router.get("/", itemController.listItem);
Router.get("/:itemId", itemController.listItemId);
Router.post("/create", itemController.createItem);
Router.delete("/delete/:itemId", itemController.deleteItem);
Router.put("/update/:itemId", itemController.updateItem);

module.exports = Router;
