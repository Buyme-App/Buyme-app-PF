//Fix
const { Router } = require("express");
const getOneSubCategoryDB = require("../../controllers/subCategory/getOneSubCategory.controller");
const showErrors = require("../../messageConsole");

const router = Router();

router.get("/:idCat", async (req, res) => {
  try {
    let { idCat } = req.params;
    if (idCat) {
      idCat = parseInt(idCat);
      const result = await getOneSubCategoryDB(idCat);
      if (result !== 404) return res.status(200).send(result);
      else return res.status(404).send(`SubCategory not Found`);
    }
    return res.status(400).send("Invalid Request");
  } catch (e) {
    showErrors("/getSubCat", e);
    return 404;
  }
});

module.exports = router;

