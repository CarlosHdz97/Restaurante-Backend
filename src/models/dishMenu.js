const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Dish = require('./dish.js');
const Menu = require('./menu.js');

Dish.belongsToMany(Menu,{as:'Detallessss', through:'dishMenu'});
Menu.belongsToMany(Dish,{as:'Ordenessss', through:'dishMenu'});
connection.sync();
