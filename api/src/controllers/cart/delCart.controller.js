const showErrors = require("../../messageConsole");
const { Cart } = require("../../database/db");

async function delCartDB(clientId) {
  try {
    const result = await Cart.findAll( {where: {clientId: clientId}});
    if (result===null) return 200;
    else {
        const result2 = Cart.destroy( {
            where: {clientId: clientId}
         })
        .then((success)=>{
            return 200;
        })
        .catch((error)=>{
            return 404;
        })
    }
  } catch (e) {
    showErrors("delCartDB", e);
    return 404;
  }
}

module.exports = delCartDB;


//