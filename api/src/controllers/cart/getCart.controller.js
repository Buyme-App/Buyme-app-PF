const showErrors = require("../../messageConsole");
const { Cart } = require("../../database/db");

async function getCartDB(clientId) {
  try {
    
    const result = await Cart.findAll( {where: {clientId: clientId}});
    if (result===null) return 404;
    else return result;
    
  } catch (e) {
    showErrors("getCartDB", e);
    return 404;
  }
}

module.exports = getCartDB;


//