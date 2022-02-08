const { Order } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Funcion para la ruta de obtención de todas las ordenes
async function getAllOrders() {
  try {
    const orders = await Order.findAll();
    if (orders) {
      return orders;
    } else {
      return false;
    }
  } catch (error) {
    showErrors("getAllOrders", error);
    return 404;
  }
}

module.exports = getAllOrders;
