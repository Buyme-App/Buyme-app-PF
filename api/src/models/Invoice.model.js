const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("invoice", {
    //factura
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    clientId: {
      type: DataTypes.INTEGER,           //Se agrega como clave para acceder a Modelo Client
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(25,2),           //Se agrega como clave para acceder a Modelo Client
      allowNull: true,
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    }
  });
};
//modificado