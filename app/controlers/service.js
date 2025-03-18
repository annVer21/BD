const HttpStatus = require("http-status-codes");
const {createService, getAllService, deleteServiceById} = require("../data-access/service")


const createServiceControler = async(req,res) => {
    console.log(req.body);
    try {
        const {title, description} = req.body;
        console.log(req);
        await createService(title, description);
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

const deleteServiceControler = async(req,res) => {
    console.log(req.body);
    try {
        const {params} = req;
        console.log(req);
        await deleteServiceById(+params.id);
        res.status(HttpStatus.NO_CONTENT).send()
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })

    }
}

const getAllServiceControler = async(req,res) => {
    try {
        const allService = await getAllService();
        res.status(HttpStatus.OK).json(allService)
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

module.exports = {createServiceControler, getAllServiceControler, deleteServiceControler}