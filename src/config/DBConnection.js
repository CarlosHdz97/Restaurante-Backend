const Sequelize = require('sequelize');
const connection = new Sequelize('mysql://root:CARLOS@localhost:3306/restaurante');
connection.authenticate().then(() => {
    console.log('Conexión establecida exitosamente.');
  })
  .catch(err => {
    console.error('No se ha podido conectar a la BD:', err);
  });


module.exports = connection;
