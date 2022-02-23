//Fix
const { SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function deleteSubCategoryDB(idCat) {
  try {
    const row = await SubCategory.findByPk(idCat);
    if (row === null) return 404;
    else {
      await row.destroy();
      return 200;
    }
  } catch (e) {
    showErrors("deleteSubCategoryDB", e);
    return 404;
  }
}

module.exports = deleteSubCategoryDB;