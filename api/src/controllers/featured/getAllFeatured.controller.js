const { Product } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Función para obtener todos los productos destacados.
async function getAllFeatured() {
  try {
    const products = await Product.findAll({ where: { featured: true } });
    if (products) {
      return products;
    } else {
      return false;
    }
  } catch (error) {
    showErrors("getAllFeatured.controller", error);
    return 404;
  }
}

module.exports = getAllFeatured;
