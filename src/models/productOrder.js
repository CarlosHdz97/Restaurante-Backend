const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Order = require('./order.js');
const Product = require('./product.js');

const productOrder = connection.define('productOrder', {
  amount:{
    type:Sequelize.FLOAT,
    required: true
  },
  price:{
    type:Sequelize.FLOAT,
    required: true
  }
})
Order.belongsToMany(Product,{as:'Detalles', through:'productOrder'});
Product.belongsToMany(Order,{as:'Ordenes', through:'productOrder'});
connection.sync();
