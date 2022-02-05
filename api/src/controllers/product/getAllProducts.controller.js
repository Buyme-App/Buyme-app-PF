const {Product} = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para obtener todos los productos registrados en la base de datos, 
// retorna los productos en caso de haber y de lo contrario retorna false.
async function getAllProducts() {

    try {

        const products = await Product.findAll()
        if (products.length > 0) {
            return products;
        }else{
            return false;
        }
        

    } catch (error) {
        showErrors('getAdminDB', error);
        return 404
    }
}

module.exports = getAllProducts;