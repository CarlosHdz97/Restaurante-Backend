const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Order= require('../models/order');
const productOrder= require('../models/productOrder');

//get data. /Order
router.get('/',(req,res,next) =>{
	Order.findAll({order: ['id'],include: [{model: Product, as:'Detalles'}]})
	.then( order =>{
		res.json(order);
	})
	.catch( err =>{
		throw err;
	});
});

//get data. /Order
router.get('/sinEntregar',(req,res,next) =>{
	Order.findAll({order: ['deliveryDate'],include: [{model: Product, as:'Detalles'}], where:{status:false}})
	.then( order =>{
		res.json(order);
	})
	.catch( err =>{
		throw err;
	});
});

//get data. /Order
router.get('/now',(req,res,next) =>{
	Order.findAll({order: ['deliveryDate'],include: [{model: Product, as:'Detalles'}], where:{deliveryDate:new Date().toISOString(), status:false}})
	.then( order =>{
		res.json(order);
	})
	.catch( err =>{
		throw err;
	});
});



//post data /order
router.post('/', (req, res) => {
  const order = new Order(req.body);
  order.save().then( order => {
    res.status(200).json({order: 'Orden agregada!'});
  })
  .catch(err =>{
    res.status(400).send({err: 'Error al agregar el item'});
  });
});

router.post('/detail', (req, res) => {
  const ProductOrder = new productOrder(req.body);
  ProductOrder.save().then( ProductOrder => {
    res.status(200).json({ProductOrder: 'Detalles agregados!'});
  })
  .catch(err =>{
    res.status(400).send({err: 'Error al agregar el item'});
  });
});


//get data. /Order/:id
router.get('/:id',(req,res,next) =>{
	Order.findOne({include: [{model: Product, as:'Detalles'}], where: {id: req.params.id}})
	.then( order =>{
		res.json(order);
	})
	.catch( err =>{
		throw err;
	});
});


module.exports = router;
