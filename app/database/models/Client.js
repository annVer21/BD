const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Client = sequelize.define("client", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    surname: {
        allowNull: false,
        type: DataTypes.STRING
    },
    patronymic: {
        allowNull: false,
        type: DataTypes.STRING
    },
    telephone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    passport: {
        allowNull: false,
        type: DataTypes.STRING
    }
},
{tableName: "client", timestamps: false, freezeTableName: true})

module.exports = Client;