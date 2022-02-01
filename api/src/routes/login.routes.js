const {Router} = require('express');
const {loginRoutesController } = require('../controllers/login.routes.controller');
const router = Router();


router.get('/login', loginRoutesController());     //Ruta para loguearse y obtener si existe el usuario y si tiene password valido
                                          
module.exports = router;