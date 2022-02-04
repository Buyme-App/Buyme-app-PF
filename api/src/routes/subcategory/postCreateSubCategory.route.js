const { Router } = require("express");
const createSubCategoryDB = require("../../controllers/subCategory/postCreateSubCategory.controller");
const showErrors = require("../../messageConsole");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await createSubCategoryDB(name);

    if (result === 201)
      return res.status(201).send(`SubCategory ${name} was created.`);
    else return res.status(400).send(`SubCategory ${name} already exists.`);
  } catch (e) {
    showErrors("/createSubCat", e);
    return 400;
  }
});

module.exports = router;
