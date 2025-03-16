const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Employee = sequelize.define("employee", {
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
    work_schedule: {
        allowNull: false,
        type: DataTypes.STRING
    },
    post: {
        allowNull: false,
        type: DataTypes.STRING
    },
},
{tableName: "employee", timestamps: false, freezeTableName: true})

module.exports = Employee;