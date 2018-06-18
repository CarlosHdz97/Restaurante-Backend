const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Dish = require('./dish.js');
const Product = require('./product.js');

const productDish = connection.define('productDish', {
  ayuda:{
    type:Sequelize.STRING(60)
  }
})

Dish.belongsToMany(Product,{as:'Detalless', through:'productDish'});
Product.belongsToMany(Dish,{as:'Ordeness', through:'productDish'});
module.exports = productDish;
connection.sync();
