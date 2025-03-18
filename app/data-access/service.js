const {Service} = require("../database/models")
const createService = (title, description) => Service.create ({title, description});
//const updateDocumentList = (type) => DocumentList.create ({documentType: type});
const deleteService = (where) => Service.destroy ({where});
const getService = (id) => deleteService({id});
const getAllService = () => Service.findAll ();
//const getByIdcreateDocumentList = (id) => DocumentList.findByPk (id)


module.exports = {createService, getService, getAllService}