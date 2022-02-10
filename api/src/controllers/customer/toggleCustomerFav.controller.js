const showErrors = require("../../messageConsole");
const { Client, Product } = require("../../database/db");

async function toggleFavDB(id, idProduct) {
  try {
    let result = await Client.findByPk(id);
    if (result === null) return 404;
    else {
      let favarray = result.favorites;
      let isHere = favarray.includes(idProduct);

      if (isHere === false) {
        //El cliente no lo tenia al producto como favorito ----> Se agrega el id del producto
        favarray = favarray.concat(idProduct);

        const result1 = await Product.findByPk(idProduct);

        if (result1 === null) return 404;
        else {
          result1.favorite++;
          result1
            .save()
            .then(function () {})
            .catch(function (error) {
              return 400;
            });
        }
      } else {
        //El cliente lo tenia al producto como favorito ------> Se borra el id del producto
        favarray = favarray.filter((x) => x !== idProduct);
        const result1 = await Product.findByPk(idProduct);

        if (result1 === null) return 404;
        else {
          console.log("result1", result1);
          if (result1.favorite > 1) result1.favorite--;
          result1
            .save()
            .then(function () {})
            .catch(function (error) {
              return 400;
            });
        }
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
