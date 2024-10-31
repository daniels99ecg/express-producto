const sequelize = require("../../db/db");
const Item = require("../../model/item");

async function listItem(req, res) {
  try {
    const item = await Item.findAll();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Item" });
    console.log(error);
  }
}

async function listItemId(req, res) {
  try {
    const itemId = req.params.itemId;
    const item = await Item.findByPk(itemId);

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
}

async function createItem(req, res) {
  const dataItem = req.body;
  try {
    const item = await Item.create({
      nameProduct: dataItem.nameProduct,
      price: dataItem.price,
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Item" });
    console.log(error);
  }
}

async function deleteItem(req, res) {
  try {
    const itemId = req.params.itemId;
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item no encontrado" });
    }

    await item.destroy();

    res.json({ message: "Item eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar item" });
  }
}

async function updateItem(req, res) {
  try {
    const itemId = req.params.itemId;
    const dataItem = req.body;

    // Buscar el ítem
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item no encontrado" });
    }

    // Actualizar el ítem
    await Item.update(
      {
        nameProduct: dataItem.nameProduct,
        price: dataItem.price,
      },
      {
        where: { id: itemId },
      }
    );

    // Volver a buscar el ítem actualizado
    const updatedItem = await Item.findByPk(itemId);

    // Enviar el ítem actualizado como respuesta
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar item" });
  }
}

module.exports = {
  listItem,
  createItem,
  deleteItem,
  updateItem,
  listItemId,
};
