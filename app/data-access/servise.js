const {Service} = require("../database/models")
const createService = (title, description) => Service.create ({title, description});
module.exports = {createService}