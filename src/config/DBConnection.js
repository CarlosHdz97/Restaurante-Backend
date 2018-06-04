const Sequelize = require('sequelize');
//const connection = new Sequelize('mysql://root:CARLOS@localhost:3306/restaurante');
const connection = new Sequelize('mysql://b3525d3e84c298:81d10a2c@us-cdbr-iron-east-05.cleardb.net/heroku_1d483ea445fb124?reconnect=true');
//const connection = new Sequelize(process.env.CLEARDB_DATABASE_URL);
connection.authenticate().then(() => {
    console.log('Conexión establecida exitosamente.');
  })
  .catch(err => {
    console.error('No se ha podido conectar a la BD:', err);
  });


module.exports = connection;
