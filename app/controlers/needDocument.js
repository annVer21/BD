const HttpStatus = require("http-status-codes");
const {createNeedDocument, getAllNeedDocument}= require("../data-access/needDocument")


const createNeedDocumentControler = async(req,res) => {
    try {
        const {id_service, id_doc_list} = req.body;
        await createNeedDocument(id_service, id_doc_list);
        res.status(HttpStatus.CREATED).send();
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })
    }
}

const getAllNeedDocumentController = async(req,res) => {
    try {
        const allClient = await getAllNeedDocument();
        res.status(HttpStatus.OK).json(allClient)
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't get"
        })
    }
}

module.exports = {createNeedDocumentControler, getAllNeedDocumentController};