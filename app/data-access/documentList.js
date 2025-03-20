const {DocumentList} = require("../database/models")
const createDocumentList = (type) => DocumentList.create ({documentType: type});
const updateDocumentListById = ({id, documentType}) => DocumentList.update(
    {documentType},
    {
        where: {id}
    }
);

const getDocumentListById = (id) => DocumentList.findByPk(id);
const deleteDocumentList = (where) => DocumentList.destroy ({where});
const deleteDocumentListById = (id) => deleteDocumentList({id});
const getAllDocumentList = () => DocumentList.findAll ();

module.exports = {createDocumentList, deleteDocumentList, getAllDocumentList, deleteDocumentListById, updateDocumentListById, getDocumentListById}

