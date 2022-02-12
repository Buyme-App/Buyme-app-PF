const {Router} = require('express');
const statusUser = require('../../controllers/user/statusUser.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para eliminar un usuario, invoca al controlador deleteUser()
//  se le retorna true si fue eliminado o false si no se eliminó.
router.put('/', async (req, res) => {

    const {id, status} = req.body;

    if(id && status){

        try {
        
            const Ustatus = await statusUser(id, status);
            if(Ustatus) return res.send('Updated status');
            else return res.send('User not found');
    
        } catch (error) {
            
            showErrors('/statusUser/:id', error);
            return 500
        }

    }else{
        return res.send('Status and Id are required').status(500);
    }

});



module.exports = router;