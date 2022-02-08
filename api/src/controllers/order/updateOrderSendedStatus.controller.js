const { Order } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Función para actualizar el estado de un pedido, en cuanto a si fue enviado o no.
//Recibe el id del pedido y un boolean para actualizar el estado.
async function updateOrderSendedStatus(id, sended) {
  try {
    console.log(sended);
    if (typeof sended === "boolean")
      updateItem = await Order.update(
        {
          sended,
        },
        { where: { id: parseInt(id) } }
      );
    else return false;
    console.log(sended);
    if (updateItem > 0) return `sended: ${sended}`;
    return false;
  } catch (error) {
    showErrors("updateOrderSendedStatus", error);
    return false;
  }
}
console.log(true);
module.exports = updateOrderSendedStatus;
