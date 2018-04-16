const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Order = connection.define('order',{
  total: {
    type: Sequelize.FLOAT,
    required: true
  },
  status:{
    type:Sequelize.BOOLEAN,
    required: true
  },
  deliveryDate: {
    type: Sequelize.DATEONLY,
    required: true
  }
});

module.exports = Order;
