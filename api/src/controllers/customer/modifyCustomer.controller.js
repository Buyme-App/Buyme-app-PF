const showErrors = require("../../messageConsole");
const { Client } = require("../../database/db");

async function modifyCustomerDB(
  id,
  firstName,
  lastName,
  email,
  password,
  country,
  phone,
  address,
  favorites
) {
  try {
    const row = await Client.findByPk(id);
    if (row === null) return 404;
    else {
      if (firstName !== "") row.firstName = firstName;
      if (lastName !== "") row.lastName = lastName;
      if (email !== "") row.email = email;
      if (password !== "") row.password = password;
      if (country !== "") row.country = country;
      if (phone !== "") row.phone = phone;
      if (address !== "") row.address = address;
      if (favorites !== []) row.favorites = favorites;

      let status = 0;
      row
        .save()
        .then(function () {
          return 200;
        })
        .catch(function (error) {
          return 400;
        });
      return status;
    }
  } catch (e) {
    showErrors("modifyCustomerDB", e);
    return 404;
  }
}

module.exports = modifyCustomerDB;
