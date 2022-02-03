const { Router } = require ('express');
const modifySubCategoryDB = require('../controllers/modifySubCategory.controller');
const showErrors = require('../messageConsole');
const router = Router();

router.put('/', async (req, res) => {
    try{
        const { id, name } = req.body;
        const result = await modifySubCategoryDB(id, name);
        if (result===404) return res.status(404).send('SubCategory not Found');
        else return res.status(200).send('SubCategory was modified')
    }catch(e) {
        showErrors('/modSubCat', e);
        return 404;
    };
})

module.exports = router;