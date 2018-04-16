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
  timeElaboration: {
    type: Sequelize.DATEONLY,
    required: true
  },
  type:{
    type:Sequelize.BOOLEAN,
    required: true
  },
  note:{
    type: Sequelize.STRING(255)
  }
});

module.exports = Dish;
