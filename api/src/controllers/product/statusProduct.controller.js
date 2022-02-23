const {Product} = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para eliminar  un  producto registrado en la base de datos,
//  recibe el Id del producto y retorna true si se elimino el producto de lo contrario retorna false.
async function statusProduct(id, status){

    try {
        const statusPro = await Product.update({
            status
        },
        {
            where: {id: parseInt(id)}
        });

        if(statusPro > 0) return true;
        else return false;
        
    } catch (error) {
        
        showErrors('statusProduct', error);
        return false;
    }
};


module.exports = statusProduct;