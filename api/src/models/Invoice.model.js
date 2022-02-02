const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("invoice", {
    //factura
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    productsIds: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
