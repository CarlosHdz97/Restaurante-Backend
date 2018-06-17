const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');
const Dish= require('../models/dish');
const dishMenu= require('../models/dishMenu');

//get data. /Order
router.get('/',(req,res,next) =>{
	Menu.findAll({include: [{model: Dish, as:'Ordenessss'}]})
	.then( menu =>{
		res.json(menu);
	})
	.catch( err =>{
		throw err;
	});
});




//post data /order
router.post('/menu', (req, res) => {
  const Menu = new Menu(req.body);
  Menu.save().then( menu => {
    res.status(200).json({menu: 'Platillo agregado!'});
  })
  .catch(err =>{
    res.status(400).send({err: 'Error al agregar el item'});
  });
});



//get data. /Order/:id
router.get('/:id',(req,res,next) =>{
	Menu.findOne({include: [{model: Dish, as:'Ordenessss'}], where: {id: req.params.id}})
	.then( Menu =>{
		res.json(Menu);
	})
	.catch( err =>{
		throw err;
	});
});


module.exports = router;
