const { Category } = require("../database/db");
const showErrors = require("../messageConsole");

async function getOneCategoryDB(idCat) {
  try {
    const result = await Category.findByPk(idCat);
    if (result === null) return 404;
    else return result;
  } catch (e) {
    showErrors("getOneCategoryDB", e);
    return 404;
  }
};

module.exports = getOneCategoryDB;
