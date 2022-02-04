const {User} = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para eliminar  un usuario registrado en la base de datos,
//  recibe el Id del usuario y retorna true si se elimino  de lo contrario retorna false.
async function deleteUser(id){

    try {
        const delUser = await User.destroy({
            where: {id: parseInt(id)}
        });

        if(delUser > 0) return true;
        else return false;
        
    } catch (error) {
        
        showErrors('deleteUser', error);
        return false;
    }
};


module.exports = deleteUser;