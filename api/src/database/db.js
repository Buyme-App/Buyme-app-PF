const sequelize = require('./Sequelize') // Archivo de conexion con sequelize

const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '../models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '../models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Category, SubCategory, Product, Admin, User } = sequelize.models;

// Aca vendrian las relaciones

//asociacion de uno a muchos--> Category a SubCategory s
Category.hasMany(SubCategory);     //clave externa definida en SubCategory
SubCategory.belongsTo(Category);   //clave externa definida en SubCategory



Product.belongsTo(SubCategory, { through: "product_subCategory" });
Product.belongsTo(Category, { through: "product_Category" });
SubCategory.belongsToMany(Product, { through: "product_subCategory" });

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
