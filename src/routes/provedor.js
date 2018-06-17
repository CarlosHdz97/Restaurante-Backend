const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Provedor = require('../models/provedor');


//get data. /Provedor
router.get('/', (req, res)=>{
  Provedor.findAll().then( provedor =>{
			res.json(provedor);
		})
		.catch( error =>{
			throw err;
		});
});


//get data. /provedor/:id
router.get('/:id',(req,res,next) =>{
  Provedor.findOne({where: {id: req.params.id}})
  .then( provedor =>{
			res.json(provedor);
    })
  .catch( err =>{
    throw err;
  });
});


//post data- Provedor -Post
router.post('/', (req, res) => {
  const provedor = new Provedor(req.body);
  provedor.save().then( provedor => {
    res.status(200).json({provedor: 'Provedor agregado!'});
  })
  .catch(err =>{
    res.status(400).send({provedor: 'Error al agregar el item'});
  });
});


//update data- /Provedor/id -Put
router.put('/:id', (req, res, next) => {
  Provedor.findOne({where: {id: req.params.id}})
  .then(provedor=>{
    provedor.name = req.body.name;
    provedor.street = req.body.street;
    provedor.number = req.body.number;
    provedor.colonia= req.body.colonia;
    provedor.cp = req.body.cp;
    provedor.state = req.body.state;
    provedor.municipio = req.body.municipio;
    provedor.phone = req.body.phone;
    provedor.email = req.body.email;
    provedor.description = req.body.description;
    provedor.save().then(provedor => {
      res.status(200).json({provedor: 'Provedor agregado!'});
    })
    .catch(err=>{
      res.status(400).send({provedor: 'Error al agregar el item'});
    });
    })
  .catch(err=>{
    throw err;
  });
});


//delete data- /provedor/id -delete
router.delete('/:id', (req, res, next) =>{
  Provedor.destroy({where:{id:req.params.id}})
  .then( provedor=>{
    res.status(200).json({provedor: 'Provedor eliminado!'});
    })
  .catch( err=>{
    res.status(400).send({provedor: 'Error al actualizar el producto'});
  });
});

module.exports = router;
