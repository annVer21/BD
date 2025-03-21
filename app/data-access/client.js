const {Client} = require("../database/models");

const createClient = (name, surname, patronymic, telephone, passport) => Client.create ({name, surname, patronymic, telephone, passport});

const getAllClient = () => Client.findAll();

module.exports = {createClient, getAllClient}