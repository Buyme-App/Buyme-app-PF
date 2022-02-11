const { Order } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Función para crear una order en la base de datos, para seguimiento del pedido una ves confirmada la compra.
async function createOrder(adress, transportedBy, trackingNumber) {
  try {
    const createOrder = await Order.create({
      adress,
      transportedBy,
      trackingNumber,
    });
    if (createOrder) return createOrder;
    else return false;
  } catch (error) {
    showErrors("createOrder", error);
    return false;
  }
}

module.exports = createOrder;
