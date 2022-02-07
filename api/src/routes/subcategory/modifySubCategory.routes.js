const { Router } = require ('express');
const modifySubCategoryDB = require('../../controllers/subCategory/modifySubCategory.controller');
const getOneCategoryDb=require('../../controllers/category/getOneCategory.controller');

const showErrors = require('../../messageConsole');
const router = Router();

router.put('/', async (req, res) => {
    try{
        let { id, name, category } = req.body;

        if (!name && !category) return res.status(400).send("Invalid Request"); 
        category = parseInt(category);
        id = parseInt(id);

        const result1 = await getOneCategoryDb(category);
        if (result1===404) return res.status(404).send('Category not Found');

        const result = await modifySubCategoryDB(id, name, category);
        if (result===404) return res.status(404).send('SubCategory not Found');
        else return res.status(200).send('SubCategory was modified')
    }catch(e) {
        showErrors('/modSubCat', e);
        return 404;
    };
})

module.exports = router;