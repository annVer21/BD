const {Operation} = require("../database/models")
const createOperation = (id_servise, id_record, id_employee, contract_number, application_number, date, type_operation) => Operation.create ({id_servise, id_record, id_employee, contract_number, application_number, date, type_operation});
module.exports = {createOperation}