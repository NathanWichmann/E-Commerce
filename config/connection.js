// this brings in the dotenv to hide passwords an other sensitive information
require('dotenv').config();
//brings in the sequelize depend
const Sequelize = require('sequelize');
// creates the environemnt for the jawsdb env 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  

module.exports = sequelize;
