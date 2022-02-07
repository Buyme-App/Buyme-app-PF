//Fix
const { SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function modifySubCategoryDB(idCat, nameCat, category) {
  try {


    let row = await SubCategory.findByPk(idCat);
    if (row === null) return 404;
    else {
      if (nameCat) row.name = nameCat;
      if (category) row.categoryId = category;
      row.save()
        .then(function () {
          return 200;
        })
        .catch(function (error) {
          return 400;
        });
    }
  } catch (e) {
    showErrors("modifySubCategoryDB", e);
    return 404;
  }
};

module.exports = modifySubCategoryDB;
