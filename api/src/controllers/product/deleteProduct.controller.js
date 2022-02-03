const {Product} = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para eliminar  un  producto registrado en la base de datos,
//  recibe el Id del producto y retorna true si se elimino el producto de lo contrario retorna false.
async function deleteProduct(id){

    try {
        const delProduct = await Product.destroy({
            where: {id: parseInt(id)}
        });

        if(delProduct > 0) return true;
        else return false;
        
    } catch (error) {
        
        showErrors('deleteProduct', error);
        return false;
    }
};


module.exports = deleteProduct;