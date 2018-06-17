const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Dish = require('./dish.js');
const Command = require('./command.js');

Dish.belongsToMany(Command,{as:'Ordenesss', through:'dishCommand'});
Command.belongsToMany(Dish,{as:'Detallesss', through:'dishCommand'});
connection.sync();
