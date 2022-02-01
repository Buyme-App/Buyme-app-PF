const {product} = require('../database/db');
const showErrors = require('../messageConsole');

// Funcion controladora para crear un producto en la base de datos.

async function createProduct(name, price, favorite){

    try {
         const createProduct = await product.create({
             name,
             price,
             favorite
         });
         return createProduct;

    } catch (error) {
       showErrors('createProduct', error)
       return 500
    }

};



module.exports = createProduct;