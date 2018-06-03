const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
			res.json({
        "id":"5",
        "nombre":"desayuno",
        "platillos":{
          "idPlatillo": [3,1,14,20,34,15,19,8]
        },
        "date":"2018-04-25"
      });

});

module.exports = router;
