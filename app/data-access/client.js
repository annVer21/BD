const {Client} = require("../database/models")
const createClient = (name, surname, patronymic, telephone, passport) => Client.create ({name, surname, patronymic, telephone, passport});
module.exports = {createClient}