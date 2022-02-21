const { Router } = require("express");
const getCatById = require("../../controllers/category/getCatById.controller");
const showErrors = require("../../messageConsole");

const router = Router();

router.get("/:idCat", async (req, res) => {
    let { idCat } = req.params;
    
    try {        
        if (idCat) {
            idCat = parseInt(idCat);
            const result = await getCatById(idCat);
            if (result !== 404) return res.status(200).send(result);
            else return res.status(404).send(`Category not Found`);
        }
        return res.status(400).send("Invalid Request");
    } catch (e) {
        showErrors("/getCatById", e);
        return 404;
    }
});

module.exports = router;