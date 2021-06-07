const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}
// rules use for the tag table 
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      unique: false,
  
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
