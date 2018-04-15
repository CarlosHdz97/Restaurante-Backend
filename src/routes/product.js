const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Product = require('../models/product');
const Provedor= require('../models/provedor');


//get data. /Product
router.get('/', (req, res)=>{
  Product.findAll({include:[{model: Provedor}]}).then( product =>{
			res.json(product);
		})
		.catch( err =>{
			throw err;
		});
});


//get data. /product/:id
router.get('/:id',(req,res,next) =>{
  Product.findOne({where: {id: req.params.id}})
  .then( product =>{
			res.json(product);
    })
  .catch( err =>{
    throw err;
  });
});


//post data- Provedor -Post
router.post('/', (req, res) => {
  const product = new Product(req.body);
  product.save().then( product => {
    res.status(200).json({product: 'Producto agregado!'});
  })
  .catch(err =>{
    res.status(400).send({err: 'Error al agregar el item'});
  });
});


//update data- /Provedor/id -Put
router.put('/:id', (req, res, next) => {
  Product.findOne({where: {id: req.params.id}})
  .then(product=>{
    product.name = req.body.name;
    product.amount = req.body.amount;
    product.unit = req.body.unit;
    product.minStock = req.body.minStock;
    product.maxStock = req.body.maxStock;
    product.kind = req.body.kind;
    product.provedorId = req.body.provedorId;
    product.save().then(product => {
      res.status(200).json({product: 'Producto agregado!'});
    })
    .catch(err=>{
      res.status(400).send({err: 'Error al agregar el item'});
    });
    })
  .catch(err=>{
    throw err;
  });
});


//delete data- /provedor/id -delete
router.delete('/:id', (req, res, next) =>{
  Product.destroy({where:{id:req.params.id}})
  .then( product=>{
    res.status(200).json({provedor: 'Producto eliminado!'});
    })
  .catch( err=>{
    res.status(400).send({provedor: 'Error al actualizar el producto'});
  });
});

module.exports = router;
