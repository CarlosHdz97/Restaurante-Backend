const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();
const provedorRoutes = require('./routes/provedor.js');
const connection = require('./config/DBConnection');
// Middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/provedor',provedorRoutes);


const port = 3000 || process.env.PORT;
console.log(port);
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto: ', port);
});
