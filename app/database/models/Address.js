const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Address = sequelize.define("address", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    type: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    id_client: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    number_house: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    number_flat: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    street: {
        allowNull: false,
        type: DataTypes.STRING
    }
},
{tableName: "address", timestamps: false, freezeTableName: true})

module.exports = Address;