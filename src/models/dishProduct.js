const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Dish = require('./dish.js');
const Product = require('./product.js');

Dish.belongsToMany(Product,{as:'Detalless', through:'productDish'});
Product.belongsToMany(Dish,{as:'Ordeness', through:'productDish'});
connection.sync();
