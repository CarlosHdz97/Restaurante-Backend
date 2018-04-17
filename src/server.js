const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();
const productRoutes = require('./routes/product.js');
const provedorRoutes = require('./routes/provedor.js');
const productOrder = require('./models/productOrder.js');

//const pp = require('./models/productProvedor.js');
// Middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/provedor',provedorRoutes);
app.use('/product',productRoutes);


const port = 3000 || process.env.PORT;
console.log(port);
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto: ', port);
});
