'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpotImage extends Model {

    static associate(models) {
      // define association here
      SpotImage.belongsTo(models.Spot, {foreignKey: 'id', onDelete: 'CASCADE'}); 
    }
  }
  SpotImage.init({
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      references: {model: 'Spots', key: 'id'}, 
      onDelete: 'CASCADE'
    }, 
    url: {
      type: DataTypes.STRING,
      allowNull: false 
    }, 
    preview: {
      type: DataTypes.BOOLEAN, 
      allowNull: false 
    }, 
  }, {
    sequelize,
    modelName: 'SpotImage',
  });
  return SpotImage;
};