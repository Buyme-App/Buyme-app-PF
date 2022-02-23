const {User} = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para eliminar  un usuario registrado en la base de datos,
//  recibe el Id del usuario y retorna true si se elimino  de lo contrario retorna false.
async function statusUser(id, status){

    try {
        const userStatus = await User.update({
            status
        },
        {
            where: {id: parseInt(id)}
        });

        if(userStatus > 0) return true;
        else return false;
        
    } catch (error) {
        
        showErrors('statusUser', error);
        return false;
    }
};


module.exports = statusUser;