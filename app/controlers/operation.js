const HttpStatus = require("http-status-codes");
const {createOperation, getAllOperation}= require("../data-access/operation")


const createOperationControler = async(req,res) => {
    try {
        const {id_service, id_record, id_employee, contract_number, application_number, date, type_operation} = req.body;
        await createOperation(id_service, id_record, id_employee, contract_number, application_number, date, type_operation);
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

const getAllOperationController = async(req,res) => {
    try {
        const allOperation = await getAllOperation();
        res.status(HttpStatus.OK).json(allOperation)
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

module.exports = {createOperationControler, getAllOperationController}