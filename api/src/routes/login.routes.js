const { Router } = require('express');
const { loginRoutesController } = require('../controllers/login.routes.controller');
const router = Router();

//router.get('/login', loginRoutesController);     //Ruta para loguearse y obtener si existe el usuario y si tiene password valido

router.get('/', async (req, res) => {

    try {
        const adminData = await loginRoutesController();
        return res.status(200).json(login); // Cambiar login 

    } catch (error) {
        showErrors('/login', error)
        res.status(404)
    }
});

module.exports = router; 