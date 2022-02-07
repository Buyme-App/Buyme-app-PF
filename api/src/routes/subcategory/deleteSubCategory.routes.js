const { Router } = require("express");
const deleteSubCategoryDB = require("../../controllers/subCategory/deleteSubCategory.controller");
const router = Router();
const showErrors = require("../../messageConsole");

router.delete("/:idCat", async (req, res) => {
  try {
    const { idCat } = req.params;
    if (idCat) {
      const result = await deleteSubCategoryDB(idCat);
      if (result !== 404) return res.status(200).send("SubCategory deleted");
      else return res.status(404).send("SubCategory not Found");
    }
    return res.status(400).send("Invalid Request");
  } catch (e) {
    showErrors("/delSubCat", e);
    return 404;
  }
});

module.exports = router;
