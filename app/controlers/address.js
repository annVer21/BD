const HttpStatus = require("http-status-codes");
const {createAddress, getAllAddresses}= require("../data-access/address")


const createAddressControler = async(req,res) => {
    try {
        const {type, id_client, number_house, number_flat, street} = req.body;
        await createAddress(type, id_client, number_house, number_flat, street);
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

const getAllAddressControler = async(req,res) => {
    try {
        const allAddresses = await getAllAddresses();
        res.status(HttpStatus.OK).json(allAddresses)
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

module.exports = {createAddressControler,getAllAddressControler};