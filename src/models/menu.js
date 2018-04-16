const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Menu = connection.define('menu',{
  name: {
    type: Sequelize.STRING(60),
    required: true
  },
  date:{
    type: Sequelize.DATEONLY,
    required: true
  }
});

module.exports = Menu;
