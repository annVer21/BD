const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Service = sequelize.define("service", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    }
},
{tableName: "service", timestamps: false, freezeTableName: true})

module.exports = Service;