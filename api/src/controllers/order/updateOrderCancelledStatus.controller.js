const { Order } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Función para actualizar el estado de un pedido, en cuanto a si fue cancelado o no.
//Recibe el id del pedido y un boolean para actualizar el estado.
async function updateOrderCancelledStatus(id, cancelled) {
  try {
    if (typeof cancelled === "boolean")
      updateItem = await Order.update(
        {
          cancelled,
        },
        { where: { id: parseInt(id) } }
      );
    else return false;
    if (updateItem > 0) return `cancelled: ${cancelled}`;
    return false;
  } catch (error) {
    showErrors("updateOrderCancelledStatus.controller", error);
    return false;
  }
}

module.exports = updateOrderCancelledStatus;
