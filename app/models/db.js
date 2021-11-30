const dbConfig = require("../config/db.config")

const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/sendApp');




const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});



(async function(){
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}})()

sequelize.sync({})
module.exports = sequelize;
