//Fix
const { Category } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function deleteCategoryDB(idCat) {
  try {
    const row = await Category.findByPk(idCat);
    if (row === null) return 404;
    else {
      await row.destroy();
      return 200;
    }
  } catch (e) {
    showErrors("deleteCategoryDB", e);
    return 404;
  }
}

module.exports = deleteCategoryDB;