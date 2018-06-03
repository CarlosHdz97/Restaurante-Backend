const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
			res.json({
        "id":"3",
        "idProvedor":"12",
        "fechaEntrega":"2018-04-20",
        "total":"2000.14",
        "productos":{
          "idProduct": [3,1,12,10,5,15,13,23,34,43,2]
        }
      });

});

module.exports = router;
