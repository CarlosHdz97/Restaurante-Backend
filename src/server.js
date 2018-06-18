const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();
const productRoutes = require('./routes/product.js');
const provedorRoutes = require('./routes/provedor.js');
const userRoutes = require('./routes/user.js');
const dishRoutes = require('./routes/dish.js');
//const menuRoutes = require('./routes/menu.js');
const orderRoutes = require('./routes/order.js');
//const commandRoutes = require('./routes/command.js');
const productProvedor = require('./models/productProvedor.js');
//const productOrder = require('./models/productOrder.js');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/provedor',provedorRoutes);
app.use('/product',productRoutes);
app.use('/user',userRoutes);
app.use('/dish',dishRoutes);
//app.use('/menu',menuRoutes);
app.use('/order',orderRoutes);
//app.use('/command',commandRoutes);


const port = process.env.PORT || 3000;
console.log(port);
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto: ', port);
});
