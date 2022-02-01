const { Product } = require("../models/product.model");
const showErrors = require("../../src/messageConsole");

async function getDataProduct(name) {
  try {
    const productData = await Product.findAll({ where: { name: name } });
    if (productData) {
      return productData;
    }
  } catch (error) {
    showErrors("getDataProduct", error);
    return 404;
  }
}

//recordar que siguiendo este formato, el flow de validacion sería: si le paso mi producto y devuelve el 404,
//este no existe en base de datos, entonces, puedo crearlo.

module.exports = getDataProduct;
