//fix
const { Router } = require("express");
const deleteCategoryDB = require("../../controllers/category/deleteCategory.controller");
const router = Router();
const showErrors = require("../../messageConsole");

router.delete("/:idCat", async (req, res) => {
  try {
    const { idCat } = req.params;
    if (idCat) {
      const result = await deleteCategoryDB(idCat);
      if (result !== 404) return res.status(200).send("Category deleted");
      else return res.status(404).send("Category not Found");
    }
    return res.status(400).send("Invalid Request");
  } catch (e) {
    showErrors("/delCat", e);
    return 404;
  }
});

module.exports = router;

