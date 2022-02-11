const {User} = require('../../database/db');
const showErrors = require('../../messageConsole');
const {encrypt} = require('../handleBcrypts/handleBcrypts')


// Función para crear un usuario administrativo en la base de datos, 
// si el usuario es creado con exito retorna la data y si no es creado retorna false, 
// se le aplica un hash a la contraseña para guardarla cifrada en la base de datos.

async function createUser(name, password, email, role, token){

    const emailValidation = await User.findOne({where:{email: email}});
    
    if(!emailValidation){
        try {

            password = await encrypt(password);
    
            const create = await User.create({
                name,
                password,
                email,
                role,
                token
            });
    
            if(create) return create;
            else return false;
    
        } catch (error) {
            showErrors('createUser', error)
            return false;
        }
    }else{
        return 'exists'
    }

};





module.exports = createUser;