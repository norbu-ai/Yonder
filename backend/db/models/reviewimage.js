'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewImage extends Model {

    static associate(models) {
      // define association here
      ReviewImage.belongsTo(models.Review, {foreignKey: 'id', onDelete: 'CASCADE'}); 
    }
  }
  ReviewImage.init({
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    url: {
      type: DataTypes.STRING, 
      allowNull: false 
    }, 
  }, {
    sequelize,
    modelName: 'ReviewImage',
  });
  return ReviewImage;
};