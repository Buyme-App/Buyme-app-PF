//Fix
const { Router } = require("express");
const createCategoryDB = require("../../controllers/category/postCreateCategory.controller");
const showErrors = require("../../messageConsole");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await createCategoryDB(name);

    if (result === 201)
      return res.status(201).send(`Category ${name} was created.`);
    else return res.status(400).send(`Category ${name} already exists.`);
  } catch (e) {
    showErrors("/createCat", e);
    return 400;
  }
});

module.exports = router;
