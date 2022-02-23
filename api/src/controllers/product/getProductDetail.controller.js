const { Product, Category, SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole.js");
const { Op } = require("sequelize");

//Contralador que busca en Product por Id o por Cadena de texto incluida en name
//del producto y devuelve el o los registros que matcheen
async function getProductDetail(idProduct, nameProduct) {
  try {
    if (idProduct > 0) {
      const result = await Product.findAll({
        where: { id: idProduct },
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
          {
            model: SubCategory,
            attributes: ["name"],
          },
        ],
      });
      if (result.length > 0) return result;
      else return 404;
    } else if (nameProduct !== undefined) {
      const result = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${nameProduct}%`,
          },
        },
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
          {
            model: SubCategory,
            attributes: ["name"],
          },
        ],
      });
      if (result.length > 0) return result;
      else return 404;
    } else return 400;
  } catch (e) {
    showErrors("getProductDetail", e);
    return 404;
  }
}

module.exports = getProductDetail;
