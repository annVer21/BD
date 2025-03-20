const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");
const { application } = require("express");

const Operation = sequelize.define("operation", {
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
    id_record: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    id_employee: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    contract_number: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    application_number: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE
    },
    type_operation: {
        allowNull: false,
        type: DataTypes.STRING
    }
},
{tableName: "operation", timestamps: false, freezeTableName: true})

module.exports = Operation;