const { Router } = require('express');
const getAllUsers = require('../../controllers/user/getAllUsers.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para ob
router.get('/', async (req, res) => {

    try {
        const usersData = await getAllUsers();
        if(usersData) return res.status(200).json(usersData);
        else return res.status(404).send('There are no users in the database')

    } catch (error) {
        showErrors('/getDataAdmin', error)
        res.status(404)
    }
});





module.exports = router;