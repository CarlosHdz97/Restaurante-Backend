const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Product = require('./product.js');
const Provedor = connection.define('provedor',{
  name: {
    type: Sequelize.STRING(40),
    validate:{
      notNull: true,
    },
  },
  address:{
    type: Sequelize.STRING(60),
    validate:{
      notNull: true,
    }
  },
  phone:{
    type: Sequelize.STRING(40),
    validate:{
      isNumeric: true,
      notNull: true
    }
  },
  email:{
    type: Sequelize.STRING(50),
    validate:{
      isEmail: true,
      notNull: true
    }
  },
  description:{
    type: Sequelize.STRING(255)
  }
});

module.exports = Provedor;
