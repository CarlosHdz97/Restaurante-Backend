const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Dish= require('../models/dish');
const productOrder= require('../models/dishProduct');

//get data. /Order
router.get('/',(req,res,next) =>{
	Dish.findAll({include: [{model: Product, as:'Detalless'}]})
	.then( dish =>{
		res.json(dish);
	})
	.catch( err =>{
		throw err;
	});
});




//post data /order
router.post('/', (req, res) => {
  const dish = new Dish(req.body);
  dish.save().then( dish => {
    res.status(200).json({dish: 'Platillo agregado!'});
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
	Dish.findOne({include: [{model: Product, as:'Detalless'}], where: {id: req.params.id}})
	.then( dish =>{
		res.json(dish);
	})
	.catch( err =>{
		throw err;
	});
});


module.exports = router;
