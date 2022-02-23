//Fix
const { Category, SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function getOneCategoryDB(idCat) {
  try {
    const result = await Category.findOne({
      where: { id: idCat },
      include: {
          model: SubCategory,
          attributes: ["id","name"],
        },
    });
        
    if (result === null) return 404;
    else return result;
  } catch (e) {
    showErrors("getOneCategoryDB", e);
    return 404;
  }
};

module.exports = getOneCategoryDB;
