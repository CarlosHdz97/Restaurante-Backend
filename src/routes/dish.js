const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
			res.json({
        "id":"1",
        "nombre":"sopa fria",
        "ingredientes":{
          "idProduct": [2,12,10,15]
        },
        "costo":"45"
      });

});

module.exports = router;
