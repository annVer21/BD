const HttpStatus = require("http-status-codes");
const {createClient, getAllClient}= require("../data-access/client")


const createClientControler = async(req,res) => {
    try {
        const {name, surname, patronymic, telephone, passport} = req.body;
        await createClient(name, surname, patronymic, telephone, passport);
        res.status(HttpStatus.CREATED).send();
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })
    }
}

const getAllClientControler = async(req,res) => {
    try {
        const allClient = await getAllClient();
        res.status(HttpStatus.OK).json(allClient)
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't get"
        })
    }
}

module.exports = {createClientControler, getAllClientControler};