const {Documents} = require("../database/models")
const createDocuments = (id_operation, type_document, photo_document) => Documents.create ({id_operation, type_document, photo_document});
module.exports = {createDocuments}