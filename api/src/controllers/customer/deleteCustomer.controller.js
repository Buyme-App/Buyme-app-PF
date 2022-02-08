const showErrors = require("../../messageConsole");
const { Client } = require("../../database/db");

async function deleteCustomerDB(email) {
  try {
    const result = await Client.findOne({ where: { email: email } });
    if (result === null) return 404;
    else {
      result.destroy();
      return 200;
    }
  } catch (e) {
    showErrors("deleteCustomerDB", e);
    return 404;
  }
}

module.exports = deleteCustomerDB;
