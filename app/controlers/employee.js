const HttpStatus = require("http-status-codes");
const {createEmployee, getAllEmployee}= require("../data-access/employee")


const createEmployeeControler = async(req,res) => {
    try {
        const {name, surname, patronymic, work_schedule, post} = req.body;
        await createEmployee(name, surname, patronymic, work_schedule, post);
        res.status(HttpStatus.CREATED).send();
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't create"
        })
    }
}

const getAllEmployeeControler = async(req,res) => {
    try {
        const allClient = await getAllEmployee();
        res.status(HttpStatus.OK).json(allClient)
    }catch(e){
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: "can't get"
        })
    }
}

module.exports = {createEmployeeControler, getAllEmployeeControler};