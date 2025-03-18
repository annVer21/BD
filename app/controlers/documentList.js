const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const {createDocumentList, getByIdcreateDocumentList, getAllDocumentList, deleteDocumentList, deleteDocumentListById} = require("../data-access/documentList")


const createDocumentListControler = async(req,res) => {
    console.log(req.body);
    try {
        const {type} = req.body;
        console.log(req);
        await createDocumentList(type);
        res.status(HttpStatus.CREATED).send()
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })

    }
}

// const updateDocumentListControler = async(req,res) => {
//     console.log(req.body);
//     try {
//         const {type} = req.body;
//         console.log(req);
//         await createDocumentList(type);
//         res.status(HttpStatus.CREATED).send()
//     }catch(e){
//         console.log(e);
//         res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
//             message: "can't create"
//         })

//     }
// }

const deleteDocumentListControler = async(req,res) => {
    console.log(req.body);
    try {
        const {params} = req;
        console.log(req);
        await deleteDocumentListById(+params.id);
        res.status(HttpStatus.NO_CONTENT).send()
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
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
            message: "can't create"
        })

    }
}

// const getByIdDocumentListControler = async(req,res) => {
//     try {
//         const allDocumentList = await getAllDocumentList();
//         res.status(HttpStatus.OK).json(allDocumentList)
//     }catch(e){
//         console.log(e);
//         res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
//             message: "can't create"
//         })

//     }
// }

module.exports = {createDocumentListControler, deleteDocumentListControler, getAllDocumentListControler}