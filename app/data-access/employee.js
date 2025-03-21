const {Employee} = require("../database/models");

const createEmployee = (name, surname, patronymic, work_schedule, post) => Employee.create ({name, surname, patronymic, work_schedule, post});
const getAllEmployee = () => Employee.findAll();

module.exports = {createEmployee, getAllEmployee}