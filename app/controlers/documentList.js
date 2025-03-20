const HttpStatus = require("http-status-codes");
const {createDocumentList, updateDocumentListById, getDocumentListById, getAllDocumentList, deleteDocumentList, deleteDocumentListById} = require("../data-access/documentList")


const createDocumentListControler = async(req,res) => {
    try {
        const {documentType} = req.body;
        await createDocumentList(documentType);
        res.status(HttpStatus.CREATED).send()
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })

    }
}

const updateDocumentListControler = async(req,res) => {
    try {
        const {id, documentType} = req.body;
        console.log(documentType);
        await updateDocumentListById({id, documentType})
        res.status(HttpStatus.OK).json({msg: "its ok"})
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't update"
        })

    }
}

const deleteDocumentListControler = async(req,res) => {
    try {
        const {params} = req;
        await deleteDocumentListById(+params.id);
        res.status(HttpStatus.NO_CONTENT).send()
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't delete"
        })

    }
}

const getAllDocumentListControler = async(req,res) => {
    try {
        const allDocumentList = await getAllDocumentList();
        res.status(HttpStatus.OK).json(allDocumentList)
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't get"
        })
    }
}

const getByIdDocumentListControler = async(req,res) => {
    try {
        const {params} = req;
        const documentList = await getDocumentListById(+params.id);
        res.status(HttpStatus.OK).json(documentList)
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't get"
        })

    }
}

module.exports = {createDocumentListControler, deleteDocumentListControler, getAllDocumentListControler,updateDocumentListControler,getByIdDocumentListControler};