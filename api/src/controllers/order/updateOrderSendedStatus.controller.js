const { Order } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Función para actualizar el estado de un pedido, en cuanto a si fue enviado o no.
//Recibe el id del pedido y un boolean para actualizar el estado.
async function updateOrderSendedStatus(id, sended) {
  try {
    if (typeof sended === "boolean")
      updateItem = await Order.update(
        {
          sended,
        },
        { where: { id: parseInt(id) } }
      );
    else return false;
    if (updateItem > 0) return `sended: ${sended}`;
    return false;
  } catch (error) {
    showErrors("updateOrderSendedStatus", error);
    return false;
  }
}

module.exports = updateOrderSendedStatus;
