const { Category, SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function getCategoryAllDB() {
  try {
    const result = await Category.findAll({
      include: {
        model: SubCategory,
        attributes: ["id", "name"],
      },
    });
    return result;
  } catch (e) {
    showErrors("getCategoryAllDB", e);
    return 404;
  }
}

module.exports = getCategoryAllDB;
