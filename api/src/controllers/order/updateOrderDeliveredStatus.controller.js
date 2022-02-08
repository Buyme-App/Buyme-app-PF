const { Order } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Función para actualizar el estado de un pedido, en cuanto a si fue recibido o no.
//Recibe el id del pedido y un boolean para actualizar el estado.
async function updateOrderDeliveredStatus(id, delivered) {
  try {
    if (typeof delivered === "boolean")
      updateItem = await Order.update(
        {
          delivered,
        },
        { where: { id: parseInt(id) } }
      );
    else return false;
    if (updateItem > 0) return `delivered: ${delivered}`;
    return false;
  } catch (error) {
    showErrors("updateOrderDeliveredStatus.controller", error);
    return false;
  }
}

module.exports = updateOrderDeliveredStatus;
