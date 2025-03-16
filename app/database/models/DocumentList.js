const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const DocumentList = sequelize.define("documentlist", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    documentType: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{tableName: "documentlist", timestamps: false, freezeTableName: true})

module.exports = DocumentList;