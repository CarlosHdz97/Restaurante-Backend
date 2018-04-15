const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Product = require('./product.js');
const Provedor = require('./provedor.js');

Provedor.hasMany(Product);
Product.belongsTo(Provedor);
connection.sync();
