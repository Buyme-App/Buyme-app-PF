const {Product} = require('../database/db');
const showErrors = require('../messageConsole');


async function deleteProduct(id){

    try {
        const delProduct = await Product.destroy({
            where: {id: parseInt(id)}
        });

        if(delProduct > 0) return true;
        else return false;
        
    } catch (error) {
        
        showErrors('deleteProduct', error);
        return 500
    }
};


module.exports = deleteProduct;