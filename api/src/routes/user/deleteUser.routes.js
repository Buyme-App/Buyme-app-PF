const {Router} = require('express');
const deleteUser = require('../../controllers/user/deleteUser.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para eliminar un usuario, invoca al controlador deleteUser()
//  se le retorna true si fue eliminado o false si no se eliminó.
router.delete('/:id', async (req, res) => {

    const {id} = req.params;

    try {
        
        const userDelete = await deleteUser(id);
        if(userDelete) return res.send('User removed from the database');
        else return res.send('User not found');

    } catch (error) {
        
        showErrors('/deleteUser/:id', error);
        return 500
    }

});



module.exports = router;