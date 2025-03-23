const HttpStatus = require("http-status-codes");
const {createDocuments, getAllDocuments}= require("../data-access/documents")


const createDocumentsControler = async(req,res) => {
    try {
        const {id_operation, type_document, photo_document} = req.body;
        await createDocuments(id_operation, type_document, photo_document);
        res.status(HttpStatus.CREATED).send()
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })

    }
}

// const updateDocumentListControler = async(req,res) => {
//     try {
//         const {id, documentType} = req.body;
//         console.log(documentType);
//         await updateDocumentListById({id, documentType})
//         res.status(HttpStatus.OK).json({msg: "its ok"})
//     }catch(e){
//         console.log(e);
//         res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
//             message: "can't update"
//         })

//     }
// }

// const deleteDocumentListControler = async(req,res) => {
//     try {
//         const {params} = req;
//         await deleteDocumentListById(+params.id);
//         res.status(HttpStatus.NO_CONTENT).send()
//     }catch(e){
//         console.log(e);
//         res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
//             message: "can't delete"
//         })

//     }
// }

const getAllDocumentsController = async(req,res) => {
    try {
        const allDocuments = await getAllDocuments();
        res.status(HttpStatus.OK).json(allDocuments)
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't get"
        })
    }
}

// const getByIdDocumentListControler = async(req,res) => {
//     try {
//         const {params} = req;
//         const documentList = await getDocumentListById(+params.id);
//         res.status(HttpStatus.OK).json(documentList)
//     }catch(e){
//         console.log(e);
//         res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
//             message: "can't get"
//         })

//     }
// }

module.exports = {getAllDocumentsController, createDocumentsControler}