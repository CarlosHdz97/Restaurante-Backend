const express = require('express');
const router = express.Router();
const Command = require('../models/command');
const Dish= require('../models/dish');
const commandDish= require('../models/commandDish');

//get data. /Order
router.get('/',(req,res,next) =>{
	Command.findAll({include: [{model: Dish, as:'Detallesss'}]})
	.then( dish =>{
		res.json(dish);
	})
	.catch( err =>{
		throw err;
	});
});




//post data /order
router.post('/dish', (req, res) => {
  const Dish = new Order(req.body);
  Command.save().then( command => {
    res.status(200).json({command: 'Comanda agregada!'});
  })
  .catch(err =>{
    res.status(400).send({err: 'Error al agregar el item'});
  });
});



//get data. /Order/:id
router.get('/:id',(req,res,next) =>{
	Command.findOne({include: [{model: Dish, as:'Detallesss'}], where: {id: req.params.id}})
	.then( command =>{
		res.json(command);
	})
	.catch( err =>{
		throw err;
	});
});


module.exports = router;
