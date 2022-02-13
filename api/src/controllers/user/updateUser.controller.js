const {User} = require('../../database/db');
const showErrors = require('../../messageConsole');
const {encrypt} = require('../handleBcrypts/handleBcrypts')


// Función para actualizar  un usuario administrativo registrado en la base de datos, 
// retorna true si se actualizo el usuario de lo contrario retorna false.
// se le aplilca un hash a la contraseña para guardarla cifrada.

async function updateUser(id, name, password, email, role, token){

    const statusUser = await User.findByPk(parseInt(id));
    

    if(statusUser.status){

        try {

            password = await encrypt(password);
            
            const userUpdate = await User.update({
                name,
                password,
                email,
                role,
            
                
            },
            {where: {id : parseInt(id)}}
            );
    
            if(userUpdate > 0) return true;
            else return false;
    
        } catch (error) {
            showErrors('updateUser', error)
            return false;
        }

    }else{
        return false;
    }

};





module.exports = updateUser;