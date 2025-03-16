const {DocumentList} = require("../database/models")
const createDocumentList = (type) => DocumentList.create ({documentType: type});
module.exports = {createDocumentList}