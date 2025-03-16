const {NeedDocument} = require("../database/models")
const createNeedDocument = (id_service, id_doc_list) => NeedDocument.create ({id_service, id_doc_list});
module.exports = {createNeedDocument}