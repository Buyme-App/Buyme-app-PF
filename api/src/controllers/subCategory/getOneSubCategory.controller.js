//Fix
const { SubCategory, Category } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function getOneSubCategoryDB(idCat) {
  try {
    const result = await SubCategory.findAll({
      where: { id: idCat },
      include: {
          model: Category,
          attributes: ["id","name"],
        },
    });

    if (result === null) return 404;
    else return result;
  } catch (e) {
    showErrors("getOneSubCategoryDB", e);
    return 404;
  }
};

module.exports = getOneSubCategoryDB;