const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Record = sequelize.define("record", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    id_service: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    id_client: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE
    },
    time: {
        allowNull: false,
        type: DataTypes.TIME
    }
},
{tableName: "record", timestamps: false, freezeTableName: true})

module.exports = Record;