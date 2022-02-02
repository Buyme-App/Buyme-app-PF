const {Product} = require('../database/db');
const showErrors = require('../messageConsole');

async function updateProduct(id, name, price, favorite){

    try {
        
        const updateItem = await Product.update({
            name,
            price,
            favorite
        },
        {where: {id: parseInt(id)}}
        );

        if(updateItem > 0) return true;
        return false;

    } catch (error) {
        
        showErrors('updateProduct', error);
        return 500;
    }
};


module.exports = updateProduct;