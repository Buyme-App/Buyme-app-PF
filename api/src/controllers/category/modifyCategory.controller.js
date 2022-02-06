//Fix
const { Category } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function modifyCategoryDB(id, name) {
  try {
    const row = await Category.findByPk(id);
    if (row === null) return 404;
    else {
      row.name = name;
      let status = 0;
      row
        .save()
        .then(function () {
          return 200;
        })
        .catch(function (error) {
          return 400;
        });
      return status;
    }
  } catch (e) {
    showErrors("modifyCategoryDB", e);
    return 404;
  }
}

module.exports = modifyCategoryDB;