const {Sequelize , DataType} = require("sequelize")
const sequelize = require("./db")


const role = sequelize.define('role',{
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
  
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
})

