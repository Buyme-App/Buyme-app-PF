const { Router } = require('express');
const getOneUser = require('../../controllers/user/getOneUser.controller');
const showErrors = require('../../messageConsole');
const router = Router();


// Ruta para obtener un usuario, invoca al controlador getOneUser() 
// y se le retornan el usuario si lo hay o false de no haber usuario.



router.get('/', async (req, res) => {

    const {id, name} = req.query;
    
    if(id){

        try {
            
            const user = await getOneUser(parseInt(id));
            if(user) return res.status(200).json(user);
            else return res.status(404).send('User not found');

        } catch (error) {
            showErrors('/getOneUser', error)
            res.status(404)
        }
    }else{

        try {
            
            const user = await getOneUser(name);
            if(user) return res.status(200).json(user);
            else return res.status(404).send('User not found');

        } catch (error) {
            showErrors('/getOneUser', error)
            res.status(404)
        }
    }

});




module.exports = router;