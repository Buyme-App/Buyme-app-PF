//Fix
const { Router } = require("express");
const modifyCategoryDB = require("../../controllers/category/modifyCategory.controller");
const showErrors = require("../../messageConsole");
const router = Router();

router.put("/", async (req, res) => {
  try {
    const { id, name } = req.body;
    const result = await modifyCategoryDB(id, name);
    if (result === 404) return res.status(404).send("Category not Found");
    else return res.status(200).send("Category was modified");
  } catch (e) {
    showErrors("/modCat", e);
    return 404;
  }
});

module.exports = router;
