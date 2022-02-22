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
      type: DataTypes.JSON,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,           //Se agrega como clave para acceder a Modelo Client
      allowNull: false,
    },
    Delivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
};
