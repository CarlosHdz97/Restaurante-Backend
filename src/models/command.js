const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Command = connection.define('command',{
  table: {
    type: Sequelize.STRING(60),
    required: true
  },
  status:{
    type: Sequelize.BOOLEAN,
    required: true
  }
});

module.exports = Command;
