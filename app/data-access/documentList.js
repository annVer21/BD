const {DocumentList} = require("../database/models")
const createDocumentList = (type) => DocumentList.create ({documentType: type});
//const updateDocumentList = (type) => DocumentList.create ({documentType: type});
const deleteDocumentList = (where) => DocumentList.destroy ({where});
const deleteDocumentListById = (id) => deleteDocumentList({id});
const getAllDocumentList = () => DocumentList.findAll ();
//const getByIdcreateDocumentList = (id) => DocumentList.findByPk (id)

module.exports = {createDocumentList, deleteDocumentList, getAllDocumentList, deleteDocumentListById}

