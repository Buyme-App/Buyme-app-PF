//const { DataTypes, Sequelize } = require("sequelize");

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Categories", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};