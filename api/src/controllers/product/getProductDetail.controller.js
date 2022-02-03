const { Product } = require("../../database/db.js");
const showErrors = require("../../messageConsole.js");
const { Op } = require("sequelize");

//Contralador que busca en Product por Id o por Cadena de texto incluida en name del producto y devuelve el o los registros que matcheen
async function getProductDetail(req) {
  try {
    const { idProduct, nameProduct } = req.params;
    if (idProduct) {
      const result = await Product.findByPk(idProduct);
      if (result.length > 0) return result.send(result);
      else return res.send([]);
    }
    if (nameProduct) {
      const result = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${nameProduct}&`,
          },
        },
      });
      if (result.length > 0) return result.send(result);
      else return res.send([]);
    }
  } catch (e) {
    showErrors("getProductDetail", e);

    return 404;
  }
}

module.exports = getProductDetail;
// Fixed

