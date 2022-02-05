const {Product} = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para obtener todos los productos registrados en la base de datos, 
// retorna los productos en caso de haber y de lo contrario retorna false.
async function getPaginatedProducts(limit, offset, condition) { // example condition = { title: { [Op.like]: `%js%` } }

    try {
        const products = await Product.findAndCountAll({
            limit: limit, offset: offset, where: {condition}
        })
        if (products) {
            return products;
        }else{
            return false;
        }
        

    } catch (error) {
        showErrors('getAdminDB', error);
        return 404
    }
}

module.exports = getPaginatedProducts;

// Example:
// model.findAndCountAll({
//     limit: 2,
//     offset: 1,
//     where: { title: { [Op.like]: `%js%` } }, // conditions
//   });

// The result:

// {
//     "count": 3,
//     "rows": [
//         {
//             "id": 3,
//             "title": "bezkoder Tut#3 Node.js Express",
//             "description": "Tut#3 Description",
//             "published": true,
//             "createdAt": "2020-06-05T11:55:01.000Z",
//             "updatedAt": "2020-06-05T11:55:01.000Z"
//         },
//         {
//             "id": 8,
//             "title": "bezkoder Tut#8 Node.js CRUD",
//             "description": "Tut#8 Description",
//             "published": false,
//             "createdAt": "2020-06-05T11:55:34.000Z",
//             "updatedAt": "2020-06-05T11:55:34.000Z"
//         }
//     ]
// }
