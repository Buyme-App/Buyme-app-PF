const { Router } = require("express");
const getOneCategoryDB = require("../controllers/getOneCategory.controller");
const showErrors = require("../messageConsole");

const router = Router();

router.get("/:idCat", async (req, res) => {
  try {
    const { idCat } = req.params;
    if (idCat) {
      const result = await getOneCategoryDB(idCat);
      if (result !== 404) return res.status(200).send(result);
      else return res.status(404).send(`Category not Found`);
    }
    return res.status(400).send("Invalid Request");
  } catch (e) {
    showErrors("/getCat", e);
    return 404;
  }
});

module.exports = router;
