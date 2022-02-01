const { Categories } = require("../database/db");
const showErrors = require("../api/src/messageConsole");

async function getSubCategoryDB(name) {
  try {
    const subCategoriesData = await Sub-Categories.findAll({
      where: { name: name },
    });
    if (subCategoriesData) {
      return subCategoriesData;
    }
  } catch (error) {
    showErrors("getSubCategoriesDB", error);
    return 404;
  }
}

module.exports = getSubCategoryDB;
