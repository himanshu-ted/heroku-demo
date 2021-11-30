const { Sequelize, DataTypes } = require('sequelize')


const sequelize = require("./db")

const userAddress = sequelize.define('userAddress', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuid.v4,
    },
    userId: {
        type: DataTypes.STRING,

        references: {
            model: user,
            key: 'id',
        }
    },
    type: {
        type: DataTypes.ENUM(['Home', 'Office', 'Others']),
    },
    shortAddress: {
        type: DataTypes.STRING,
        defaultValue: 'N/A',
    },
    address: {
        type: DataTypes.STRING,
    },
    postalCode: {
        type: DataTypes.STRING,
    },
    isDefault: {
        type: DataTypes.ENUM(['0', '1']),

        defaultValue: '0',
    },
    status: {
        type: DataTypes.ENUM(['Active', 'Inactive', 'Deleted']),

    },
    landmark: {
        type: DataTypes.STRING,
    },
    lat: {
        type: DataTypes.STRING,
    },
    long: {
        type: DataTypes.STRING,
    },
    zoneId: {
        model: 'zone',
    },
    addressId: {
        collection: 'userorder',
        via: 'addressId',
        dominant: true,
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

module.exports = userAddress