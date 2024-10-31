const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('items', 'postgres', 'Welcome123!', {
  dialect: 'postgres', // Cambiado a 'postgres' para PostgreSQL
  host: 'localhost', // O la dirección IP de tu servidor PostgreSQL
  port: 5432, // Puerto por defecto de PostgreSQL
  dialectOptions: {
    ssl: false, // O true si estás usando SSL en tu conexión
  }
});

async function conexion() {
  try {
    await sequelize.authenticate();
    console.log("Conexión Exitosa");
  } catch (error) {
    console.log("Tenemos un error", error);
  }
}

conexion();

module.exports = sequelize;
