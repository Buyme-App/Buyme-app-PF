const { Router } = require('express');
const getAllUsers = require('../../controllers/user/getAllUsers.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para obtener todos los usuarios administrativos, invoca al controlador getAllUsers()
// y se le retorna los usuarios junto con la data o false si no hay usuarios.

router.get('/', async (req, res) => {
    
    try {
        const usersData = await getAllUsers();
        // console.log('TTTT', usersData)
        if(usersData) return res.status(200).json(usersData);
        else return res.status(404).send('There are no users in the database')

    } catch (error) {
        showErrors('/getAllUsers', error)
        res.status(404)
    }
});





module.exports = router;