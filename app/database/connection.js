const {Sequelize} = require("sequelize");
const DB_NAME = "beltelecom";
const DB_USER = "root";
const DB_PASSVORD = "root";
const DB_HOST = "localhost";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSVORD, {
    host: DB_HOST, dialect: "mysql"
});

module.exports = sequelize 