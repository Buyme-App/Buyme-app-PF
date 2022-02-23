const { Cart } = require("../../database/db");

async function addCart(clientId, items) {
  try {
    searchCart = items = await Cart.findOrCreate({
      where: {
        clientId: clientId,
        items: items,
      },
    });

    if (searchCart) return searchCart;
    else return 404;
  } catch (error) {
    console.log("addCart", error);
    return 501, error;
  }
}

module.exports = addCart;
