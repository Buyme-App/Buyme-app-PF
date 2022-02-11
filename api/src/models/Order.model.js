const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    //modelo "order" para seguimiento del pedido una ves confirmada la compra.
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transportedBy: {
      type: DataTypes.STRING,
    },
    trackingNumber: {
      type: DataTypes.STRING,
    },
    sended: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cancelled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
