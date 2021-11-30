const { Sequelize, DataTypes } = require('sequelize')
const { uuidv4 } = require('uuid');


const sequelize = require("./db")

const users = sequelize.define('user', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4 

    },
    firstName: {
        type: DataTypes.STRING,
        defaultValue: 'N/A'

    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: 'N/A'

    },
    email: {
        type: DataTypes.STRING,

    },
    password: {
        type: DataTypes.STRING,

    },

  
    phone: {
        type: DataTypes.STRING,

    },
    status: {
        type: DataTypes.ENUM(['Active', 'Inactive', 'Deleted']),

        defaultValue: 'Inactive'

    },
    // userId: {
    //     collection: 'UserAddress',
    //     via: 'userId',
    //     dominant: true,
    // },
    referalCode: {
        type: DataTypes.STRING,

        defaultValue: 'N/A'
    },
    isRefer: {
        type: DataTypes.BOOLEAN, defaultValue: false
    },
    isSignupBonus: {
        type: DataTypes.BOOLEAN, defaultValue: false
    },
    // userId: {
    //     collection: 'userorder',
    //     via: 'userId',
    //     dominant: true,
    // },
    // userId: {
    //     collection: 'userorder',
    //     via: 'riderId',
    //     dominant: true,
    // },
    firebaseToken: {
        type: DataTypes.STRING,

    },
    stripeCustomerId: {
        type: DataTypes.STRING,
        defaultValue: 'N/A'
    },
    // favourites: {
    //     collection: "product",
    //     via: 'users',
    //     through: "userproduct"
    // },
    // orderedProducts: {
    //     collection: "product",
    //     via: 'orderedUsers',
    //     through: "userorderedproduct"
    // },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

})

module.exports = users;

