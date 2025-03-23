const {Documents} = require("../database/models");

const createDocuments = (id_operation, type_document, photo_document) => Documents.create ({id_operation, type_document, photo_document});
const getAllDocuments = () => Documents.findAll();

module.exports = {createDocuments, getAllDocuments}