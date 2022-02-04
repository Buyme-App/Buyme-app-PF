const {Router} = require('express');
const createUser = require('../../controllers/user/createUser.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para crear un  usuario administrativo en la base de datos, 
// se le retorna el usuario si fue creado de lo contrario se le retorna false.


router.post('/', async (req, res) => {

    const {name, password, email, role, token} = req.body;

    if(name && password && email && role && token){

        try {
            const create = await createUser(name, password, email, role, token);

            if(create) return res.json({message:'User created', data: create});
            else{
                return res.status(500).send('Error failed to create user');
            }
        
        } catch (error) {
            showErrors('post/createUser', error);
            return 500
        }
    }else{
        return res.send('All fields are required');
    }

    

});




module.exports = router;