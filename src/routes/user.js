const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const User = require('../models/user');


//get data. /Provedor
router.get('/', (req, res)=>{
  User.findAll().then( user =>{
			res.json(user);
		})
		.catch( error =>{
			throw err;
		});
});


//get data. /provedor/:id
router.get('/:email',(req,res,next) =>{
  User.findOne({where: {email: req.params.email}})
  .then( user =>{
			res.json(user);
    })
  .catch( err =>{
    throw err;
  });
});


//post data- Provedor -Post
router.post('/', (req, res) => {
  const user = new User(req.body);
  user.save().then( user => {
    res.status(200).json({user: 'Usuario agregado!'});
  })
  .catch(err =>{
    res.status(400).send({user: 'Error al agregar el item'});
  });
});


//update data- /Provedor/id -Put
router.put('/:id', (req, res, next) => {
  User.findOne({where: {id: req.params.id}})
  .then(user=>{
    user.name = req.body.name;
    user.address = req.body.address;
    user.fisrtSurname = req.body.fisrtSurname;
    user.surname = req.body.surname;
    user.password;
    user.save().then(user => {
      res.status(200).json({user: 'Usuario actualizado!'});
    })
    .catch(err=>{
      res.status(400).send({user: 'Error al agregar el item'});
    });
    })
  .catch(err=>{
    throw err;
  });
});


//delete data- /provedor/id -delete
router.delete('/:id', (req, res, next) =>{
  User.destroy({where:{id:req.params.id}})
  .then( user=>{
    res.status(200).json({user: 'Provedor eliminado!'});
    })
  .catch( err=>{
    res.status(400).send({user: 'Error al eliminar el usuario'});
  });
});

module.exports = router;
