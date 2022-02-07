//Fix
const { Category } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function createCategoryDB(name) {
  try {
    const [result, created] = await Category.findOrCreate({
      where: { name: name },
    });
    if (created === true) return 201;
    else return 400;
  } catch (e) {
    showErrors("createCategoryDB", e);
    return 400;
  }
}

module.exports = createCategoryDB;
