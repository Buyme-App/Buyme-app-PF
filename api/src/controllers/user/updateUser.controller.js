const {User} = require('../../database/db');
const showErrors = require('../../messageConsole');
const {encrypt} = require('../handleBcrypts/handleBcrypts')


// Función para actualizar  un usuario administrativo registrado en la base de datos, 
// retorna true si se actualizo el usuario de lo contrario retorna false.
// se le aplilca un hash a la contraseña para guardarla cifrada.

async function updateUser(id, name, password, email, role, token){

    try {
        
        password = await encrypt(password);
        
        const userUpdate = await User.update({
            name,
            password,
            email,
            role,
            token
        },
        {where: {id : parseInt(id)}}
        );

        if(userUpdate > 0) return true;
        else return false;

    } catch (error) {
        showErrors('updateUser', error)
        return false;
    }

};





module.exports = updateUser;