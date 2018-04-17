const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Order = require('./order.js');
const Product = require('./product.js');

Order.belongsToMany(Product,{through:'productOrder'});
Product.belongsToMany(Order,{through:'productOrder'});
connection.sync();
