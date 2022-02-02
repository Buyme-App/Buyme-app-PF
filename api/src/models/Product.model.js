const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("product", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        maker: { //fabricante
            type: DataTypes.STRING,
            allowNull: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        SKU: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        offerPrice:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        inventary: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        featured:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        paused:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    });
};

// Nombre
// Modelo
// Marca
// Fabricante
// SKU o (número de artículo)
// Precio
// Precio oferta
// Producto destacado (sí / no)
// Descripción
// Stock