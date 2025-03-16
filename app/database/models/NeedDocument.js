const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const NeedDocument = sequelize.define("needDocument", {
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
    id_doc_list: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    }
},
{tableName: "needDocument", timestamps: false, freezeTableName: true})

module.exports = NeedDocument;