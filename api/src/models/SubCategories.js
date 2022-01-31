const { DataTypes, Sequelize } = require("sequelize");
module.exports = (sequelize) => {
  Sequelize.define("Categories", {
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
