const { Order } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Funcion para la ruta de obtención del detalle de un pedido
async function getOrderDetail(id) {
  try {
    const result = await Order.findByPk(id);
    if (result === null || result === undefined || result === {}) return 404;
    else return result;
  } catch (error) {
    showErrors("getOrderDetail", error);
    return 404;
  }
}

module.exports = getOrderDetail;
