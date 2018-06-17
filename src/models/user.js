const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const User = connection.define('user',{
  name: {
    type: Sequelize.STRING(60),
    required: true
  },
  firstSurname: {
    type: Sequelize.STRING(60),
    required: true
  },
  surname: {
    type: Sequelize.STRING(60),
    required: true
  },
  email: {
    type: Sequelize.STRING(60),
    required: true
  },
  password:{
    type: Sequelize.STRING(255),
    required: true
  },
  rol:{
    type: Sequelize.STRING(255),
    required: true
  }
});
connection.sync();
module.exports = User;
