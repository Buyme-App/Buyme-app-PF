const showErrors = require("../../messageConsole");
const { Cart } = require("../../database/db");

async function updateCartDB(clientId, items) {
  try {
    const result = await Cart.findOne( {where: {clientId: clientId}});
    if (result===null) return 404;
    else {
        result.items=items;
        result.save()
        .then((success)=> {
            return 200;
        })
        .catch((error)=> {
            return 404
        });
    }
  } catch (e) {
    showErrors("updateCartDB", e);
    return 404;
  }
}

module.exports = updateCartDB;

//
