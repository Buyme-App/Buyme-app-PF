//Fix
const { SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function createSubCategoryDB(name, category) {
  try {
    const [result, created] = await SubCategory.findOrCreate({
      where: { name: name },
      defaults: {
        categoryId: category
      }
    });

    if (created===true) return 201;
    else return 400;
  } catch (e) {
    showErrors("createSubCategoryDB", e);
    return 400;
  }
};

module.exports = createSubCategoryDB;
