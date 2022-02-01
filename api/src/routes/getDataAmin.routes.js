const { Router } = require('express');
const getAdminDB = require('../controllers/getDataAdmin.controller');
const showErrors = require('../../src/messageConsole');
const router = Router();


router.get('/', async (req, res) => {

    try {
        const adminData = await getAdminDB();
        return res.status(200).json(adminData);

    } catch (error) {
        showErrors('/getDataAdmin', error)
        res.status(404)
    }
});





module.exports = router;