const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('admin', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
};

// userName, userPassword, userEmail