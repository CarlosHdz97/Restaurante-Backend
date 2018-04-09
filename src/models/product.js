const Sequelize = require('sequelize');
const connection = require('../config/DBConnection');
const Product = connection.define('product',{
  name: {
    type: Sequelize.STRING(40),
    validate:{
      notNull: true,
    },
  },
  amount:{
    type: Sequelize.FLOAT,
    validate:{
      isNumeric: true,
      notNull: true
    }
  },
  unit:{
    type: Sequelize.STRING(30),
    validate:{
      notNull: true
    }
  },
  minStock:{
    type: Sequelize.FLOAT,
    validate:{
      notNull: true
    }
  },
  maxStock:{
    type: Sequelize.FLOAT,
    validate:{
      notNull: true
    }
  },
  kind:{
    type:Sequelize.BOOLEAN,
    validate:{
      notNull: true
    }
  }
});
connection.sync();
module.exports = Product;
