const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
			res.json({
        "id":"10",
        "date":"2018-04-25",
        "platillos":{
          "idPlatillo": [3,1,14,20,34,15,19,8]
        },
        "total":"350.50"
      });

});

module.exports = router;
