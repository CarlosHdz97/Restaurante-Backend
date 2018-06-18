const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Dish = connection.define('dish',{
  name: {
    type: Sequelize.STRING(60),
    required: true
  },
  cost:{
    type:Sequelize.FLOAT,
    required: true
  },
  tipo: {
    type: Sequelize.STRING(60),
    required: true
  },
  note:{
    type: Sequelize.STRING(255)
  },
  status:{
    type:Sequelize.BOOLEAN,
    required: true
  }
});

module.exports = Dish;
