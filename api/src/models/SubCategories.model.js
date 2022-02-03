const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("subCategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};