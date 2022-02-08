const showErrors = require("../../messageConsole");
const { Client } = require("../../database/db");

async function toggleFavDB(id, idProduct) {
  try {
    let result = await Client.findByPk(id);
    if (result === null) return 404;
    else {
      let favarray = result.favorites;
      let isHere = favarray.includes(idProduct);
      if (isHere === false) {
        favarray = favarray.concat(idProduct);
      } else {
        favarray = favarray.filter((x) => x !== idProduct);
      }
      result.favorites = favarray;
      result
        .save()
        .then(function () {
          return 200;
        })
        .catch(function (error) {
          return 400;
        });
    }
  } catch (e) {
    showErrors("toggleFavDB", e);
    return 404;
  }
}

module.exports = toggleFavDB;
