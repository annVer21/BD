const {Record} = require("../database/models")
const createRecord = (id_service, id_client, date, time) => Record.create ({id_service, id_client, date, time});
const getAllRecord = () => Record.findAll();

module.exports = {createRecord,getAllRecord}