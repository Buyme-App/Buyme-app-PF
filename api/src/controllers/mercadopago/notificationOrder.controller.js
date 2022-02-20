const showErrors = require("../../messageConsole");
const { Invoice } = require("../../database/db");
const { SELLER_TOKEN } = process.env;
const axios = require("axios");

async function notificationOrderDB(id) {
  try {
    if (id === "") return 404;
    else {
      const result = await axios.get(
        `https://api.mercadolibre.com/merchant_orders/${id}?access_token=${SELLER_TOKEN}`
      );
      if (result === null) {
        console.log(`La Merchant_order ${id} no se puede acceder en MP)`);
        return 400;
      } else {
        let statusMerchantOrder = result.data.status; //tiene que estar cerrado
        if (statusMerchantOrder === "closed" && result.data.payments) {
          let payStatus = result.data.payments[0].status; //tiene que estar approved
          let payAccredited = result.data.payments[0].status_detail;
          let preferenceId = result.data.preference_id; //tenes que tener para ir a Invoice
          let transaction_amount = result.data.payments[0].transaction_amount;

          if (statusMerchantOrder === "closed" && payStatus === "approved") {
            let invoiceReg = await Invoice.findOne({
              where: { MPpreferenceId: preferenceId },
            });
            if (invoiceReg !== null) {
              invoiceReg.payApproved = true;
              invoiceReg.total = transaction_amount;
              invoiceReg.merchantOrderMP = id;
              await invoiceReg.update({ merchantOrderMP: id });
              await invoiceReg.save();
            }
          }
          // agrego para que cambie el estado payApproved a false si se hace una devolucion del medio de pago
          if (statusMerchantOrder === "closed" && payStatus === "refunded") {
            let invoiceReg = await Invoice.findOne({
              where: { MPpreferenceId: preferenceId },
            });
            if (invoiceReg !== null) {
              invoiceReg.refunded=true;
              invoiceReg.payApproved = false;
              invoiceReg.total = transaction_amount;
              invoiceReg.merchantOrderMP = id;
              await invoiceReg.update({ merchantOrderMP: id });
              await invoiceReg.save();
            }
          }
        }
        return 200;
      }
    }
  } catch (e) {
    showErrors("notificationOrderDB", e);
    return 404;
  }
}

module.exports = notificationOrderDB;





