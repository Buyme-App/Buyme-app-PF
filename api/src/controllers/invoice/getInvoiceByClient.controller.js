const showErrors = require("../../messageConsole");
const {Invoice } = require("../../database/db");

async function getInvoiceByClientDB(idClient) {
  try {
    const result = await Invoice.findAll({
      where: { clientId: idClient }                 // jose: cambie donde estaba    where: {id: id}
    });
    if (result) return result;
    else return 404;
  } catch (e) {
    showErrors('getInvoiceByClientDB"', e);
    return 404;
  }
}

module.exports = getInvoiceByClientDB;

//modificado jose 23/02
