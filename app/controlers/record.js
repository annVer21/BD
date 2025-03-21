const HttpStatus = require("http-status-codes");
const {createRecord, getAllRecord}= require("../data-access/record")


const createRecordControler = async(req,res) => {
    try {
        const {id_service, id_client, date, time} = req.body;
        await createRecord(id_service, id_client, date, time);
        res.status(HttpStatus.CREATED).send();
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })
    }
}

const getAllRecordControler = async(req,res) => {
    try {
        const allClient = await getAllRecord();
        res.status(HttpStatus.OK).json(allClient)
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't get"
        })
    }
}

module.exports = {createRecordControler, getAllRecordControler};