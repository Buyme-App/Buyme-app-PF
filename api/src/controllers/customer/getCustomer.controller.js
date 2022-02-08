const showErrors = require("../../messageConsole");
const { Client } = require("../../database/db");

async function getCustomerDB(id, email) {
  try {
    let result;
    if (email !== "")
      result = await Client.findOne({ where: { email: email } });
    else result = await Client.findByPk(id);
    if (result === null) return "";
    else return result;
  } catch (e) {
    showErrors("getCustomerDB", e);
    return 404;
  }
}

module.exports = getCustomerDB;
