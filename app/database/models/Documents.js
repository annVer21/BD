const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Documents = sequelize.define("documents", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    id_operation: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    type_document: {
        allowNull: false,
        type: DataTypes.STRING
    },
    photo_document: {
        allowNull: false,
        type: DataTypes.STRING
    }
},
{tableName: "documents", timestamps: false, freezeTableName: true})

module.exports = Documents;