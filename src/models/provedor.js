const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Product = require('./product.js');
const Provedor = connection.define('provedor',{
  name: {
    type: Sequelize.STRING(50),
    required: true
  },
  address:{
    type: Sequelize.STRING(250),
    required: true
  },
  phone:{
    type: Sequelize.STRING(40),
    required: true
  },
  email:{
    type: Sequelize.STRING(50),
    required: true
  },
  description:{
    type: Sequelize.STRING(255),
    required: true
  }
});

module.exports = Provedor;
