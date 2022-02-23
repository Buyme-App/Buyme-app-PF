const { Invoice } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function modifyInvoiceDB(idInvoice) {
  try {


    let row = await Invoice.findByPk(idInvoice);
    if (row === null) return 404;
    else {
      if (row.delivered===false) row.delivered = true
      else row.delivered = false;
      row.save()
        .then(function () {
          return 200;
        })
        .catch(function (error) {
          return 400;
        });
    }
  } catch (e) {
    showErrors("modifyInvoiceDB", e);
    return 404;
  }
};

module.exports = modifyInvoiceDB;
