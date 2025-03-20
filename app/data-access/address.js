const {Address} = require("../database/models")


const createAddress = (type, id_client, number_house, number_flat, street) => Address.create ({type, id_client, number_house, number_flat, street});
const getAllAddresses = () => Address.findAll();
const deleteAddressList = (where) => DocumentList.destroy ({where});
const deleteAddressListById = (id) => deleteDocumentList({id});

module.exports = {createAddress, getAllAddresses, deleteAddressListById}