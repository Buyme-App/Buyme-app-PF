const { Router } = require('express');
const updateUser = require('../../controllers/user/updateUser.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para actualizar un usuario, invoca al controlador updateUser() 
// y se le retorna true si fue actualizado o false si no se actualizo.



router.put('/', async (req, res) => {

    
    const {id, name, password, email, role, token} = req.body;

    if(id && name && password && email && role){

        try {
            const update = await updateUser(id, name, password, email, role, token);

            if(update) return res.json({message:'Updated user', data: update});
            else{
                return res.status(404).send('User update failed');
            }
        
        } catch (error) {
            showErrors('put/updateUser', error);
            return 500
        }
    }else{
        return res.send('All fields are required');
    }

    

});




module.exports = router;