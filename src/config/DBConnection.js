const Sequelize = require('sequelize');
const connection = new Sequelize('mysql://root:CARLOS@localhost:3306/restaurante');
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = connection;
