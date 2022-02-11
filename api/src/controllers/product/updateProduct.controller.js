const { Product } = require("../../database/db");
const showErrors = require("../../messageConsole");

// Función para actualizar  un  producto registrado en la base de datos,
// recibe el Id del producto y retorna true si se actualizo el producto de lo contrario retorna false.
async function updateProduct(
  id,
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
  // se parsean los parametros a int.
  parseFloat(price);
  parseInt(favorite);
  parseInt(SKU);
  parseFloat(offerPrice);
  parseInt(stock);
  parseInt(inventary);

  try {
    const updateItem = await Product.update(
      {
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
        sales,
      },
      { where: { id: parseInt(id) } }
    );

    if (updateItem > 0) return true;
    return false;
  } catch (error) {
    showErrors("updateProduct", error);
    return false;
  }
}

module.exports = updateProduct;
