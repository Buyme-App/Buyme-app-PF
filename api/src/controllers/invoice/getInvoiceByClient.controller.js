const showErrors = require("../../messageConsole");
const { Client, Invoice } = require("../../database/db");

async function getInvoiceByClientDB(id) {
  try {
    const result = await Client.findAll({
      where: { id: id },
      include: { model: Invoice },
      attributes: ["id"],
    });
    if (result) return result;
    else return 404;
  } catch (e) {
    showErrors('getInvoiceByClientDB"', e);
    return 404;
  }
}

module.exports = getInvoiceByClientDB;
