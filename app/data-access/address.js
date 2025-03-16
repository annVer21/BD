const {Address} = require("../database/models")
const createAddress = (type, id_client, number_house, number_flat, street) => Address.create ({type, id_client, number_house, number_flat, street});
module.exports = {createAddress}