const { Product } = require("../../database/db");
const showErrors = require("../../messageConsole");

// Funcion controladora para crear un producto en la base de datos.

async function createProduct(
  name,
  price,
  favorite,
  image,
  maker,
  model,
  description,
  SKU,
  offerPrice,
  stock,
  inventary,
  featured,
  paused,
  sales
) {
  // Se pasan a int los parametros para ser ingresados en la base de datos.
  parseFloat(price);
  parseInt(SKU);
  parseFloat(offerPrice);
  parseInt(stock);
  parseInt(inventary);

  try {
    const createProduct = await Product.create({
      name,
      price,
      favorite,
      image,
      maker,
      model,
      description,
      SKU,
      offerPrice,
      stock,
      inventary,
      featured,
      paused,
    });
    if (createProduct) return createProduct;
    else return false;
  } catch (error) {
    showErrors("createProduct", error);
    return false;
  }
}

module.exports = createProduct;
