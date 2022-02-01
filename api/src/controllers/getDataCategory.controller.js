const { Categories } = require("../database/db");
const showErrors = require("../api/src/messageConsole");

async function getCategoryDB(name) {
  try {
    const CategoriesData = await Categories.findAll({ where: { name: name } });
    if (CategoriesData) {
      return CategoriesData;
    }
  } catch (error) {
    showErrors("getCategoriesDB", error);
    return 404;
  }
}

module.exports = getCategoryDB;
