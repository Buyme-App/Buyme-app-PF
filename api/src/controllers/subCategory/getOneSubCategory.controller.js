const { SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function getOneSubCategoryDB(idCat) {
  try {
    const result = await SubCategory.findByPk(idCat);
    if (result === null) return 404;
    else return result;
  } catch (e) {
    showErrors("getOneSubCategoryDB", e);
    return 404;
  }
};

module.exports = getOneSubCategoryDB;
