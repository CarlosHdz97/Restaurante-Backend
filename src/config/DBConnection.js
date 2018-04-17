const Sequelize = require('sequelize');
const connection = new Sequelize('mysql://root:CARLOS@localhost:3306/restaurante');
//const connection = new Sequelize('mysql://sql9233103:aPQyR5tQxC@sql9.freemysqlhosting.net:3306/sql9233103');
connection.authenticate().then(() => {
    console.log('Conexión establecida exitosamente.');
  })
  .catch(err => {
    console.error('No se ha podido conectar a la BD:', err);
  });


module.exports = connection;
