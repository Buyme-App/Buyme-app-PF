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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    products: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
