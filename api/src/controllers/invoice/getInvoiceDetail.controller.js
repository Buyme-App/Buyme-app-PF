const { Invoice } = require("../../database/db");
const showErrors = require("../../messageConsole");

//funcion para la ruta de obtención del detalle de una factura
async function getInvoiceDetail(id) {
  try {
    const result = await Invoice.findByPk(id);
    console.log(result);
    if (result === null || result === undefined || result === {}) return 404;
    else return result;
  } catch (error) {
    showErrors("getInvoiceDetail", error);
    return 404;
  }
}

module.exports = getInvoiceDetail;
