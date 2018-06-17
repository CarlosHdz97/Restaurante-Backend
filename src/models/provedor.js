const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Product = require('./product.js');
const Provedor = connection.define('provedor',{
  name: {
    type: Sequelize.STRING(50),
    required: true
  },
  street:{
    type: Sequelize.STRING(30),
  },
  number:{
    type: Sequelize.INTEGER(30),
  },
  colonia:{
    type: Sequelize.STRING(30),
  },
  cp:{
    type: Sequelize.STRING(250),
  },
  state:{
    type: Sequelize.STRING(30),
  },
  municipio:{
    type: Sequelize.STRING(30),
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
