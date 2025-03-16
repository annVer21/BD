const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const {createDocumentList} = require("../data-access/documentList")

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
module.exports = {createDocumentListControler}