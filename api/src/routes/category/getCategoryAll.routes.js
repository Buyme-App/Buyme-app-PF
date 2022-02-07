const { Router } = require("express");
const getCategoryAllDB = require("../../controllers/category/getCategoryAll.controller");
const showErrors = require("../../messageConsole");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await getCategoryAllDB();
    if (result !== 404) return res.status(200).send(result);
    else return res.status(404).send("Category not Found");
  } catch (e) {
    showErrors("/getCatAll", e);
    return 404;
  }
});

module.exports = router;
