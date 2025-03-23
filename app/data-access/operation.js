const {Operation} = require("../database/models");

const createOperation = (id_service, id_record, id_employee, contract_number, application_number, date, type_operation) => Operation.create ({id_service, id_record, id_employee, contract_number, application_number, date, type_operation});
const getAllOperation = () => Operation.findAll();
module.exports = {createOperation, getAllOperation}