const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(25, 2),
    },
    favorite: {
      type: DataTypes.INTEGER,
      defaultValue: 0, //Added
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    maker: {
      //fabricante
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SKU: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    offerPrice: {
      type: DataTypes.DECIMAL(25, 2),
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    inventary: {
      type: DataTypes.INTEGER,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    paused: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};

// Update
