
//Fix
const { Router } = require("express");
const getOneCategoryDB = require("../../controllers/category/getOneCategory.controller");
const createSubCategoryDB = require("../../controllers/subCategory/postCreateSubCategory.controller");

const showErrors = require("../../messageConsole");
const router = Router();

router.post("/", async (req, res) => {
  try {
    let { name, category } = req.body;
    if (!name || !category) return res.status(400).send("Invalid Request"); 
    category = parseInt(category);

    const result2= await getOneCategoryDB(category);
    if (result2===404) res.status(404).send(`Category not Found`);
    else {
          const result = await createSubCategoryDB(name, category);

          if (result === 201)
            return res.status(201).send(`SubCategory ${name} was created.`);
          else return res.status(400).send(`SubCategory ${name} already exists.`);
    }      
  } catch (e) {
    showErrors("/createSubCat", e);
    return 400;
  }
});

module.exports = router;
