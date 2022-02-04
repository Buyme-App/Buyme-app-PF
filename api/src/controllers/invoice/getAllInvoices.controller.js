const { Invoice } = require("../../database/db");
const showErrors = require("../../messageConsole");

//Funcion para la ruta de obtención de todas las facturas
async function getAllInvoices() {
  try {
    const invoices = await Invoice.findAll();
    if (invoices) {
      return invoices;
    } else {
      return false;
    }
  } catch (error) {
    showErrors("getAllInvoices", error);
    return 404;
  }
}

module.exports = getAllInvoices;
