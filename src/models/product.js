const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Provedor = require('./provedor.js');
const Product = connection.define('product',{
  name: {
    type: Sequelize.STRING(60),
    required: true
  },
  amount:{
    type: Sequelize.FLOAT,
    required: true
  },
  price:{
    type: Sequelize.FLOAT,
    required: true
  },
  unit:{
    type: Sequelize.STRING(30),
    required: true
  },
  minStock:{
    type: Sequelize.FLOAT,
    required: true
  },
  maxStock:{
    type: Sequelize.FLOAT,
    required: true
  },
  kind:{
    type:Sequelize.BOOLEAN,
    required: true
  }
});

module.exports = Product;
