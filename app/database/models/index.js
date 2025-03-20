const Operation = require("./Operation")
const Address = require("./Address")
const Client = require("./Client")
const DocumentList = require("./DocumentList")
const Documents = require("./Documents")
const Employee = require("./Employee")
const NeedDocument = require("./NeedDocument")
const Record = require("./Record")
const Service = require("./Service")


Service.hasMany(Operation, { 
    sourceKey: "id",
    foreignKey: "id_service",
    as: "service_operation"
});

Record.hasMany(Operation, { 
    sourceKey: "id",
    foreignKey: "id_record",
    as: "record_operation"
});

Operation.hasMany(Documents, { 
    sourceKey: "id",
    foreignKey: "id_operation",
    as: "documents_operation"
});

Employee.hasMany(Operation, { // OK
    sourceKey: "id",
    foreignKey: "id_employee",
    as: "employee_operation"
});

Client.hasMany(Address, { 
    sourceKey: "id",
    foreignKey: "id_client",
    as: "client_address"
});

Service.hasMany(Record, { 
    sourceKey: "id",
    foreignKey: "id_service",
    as: "service_record"
});

Client.hasMany(Record, { 
    sourceKey: "id",
    foreignKey: "id_client",
    as: "client_record"
});

DocumentList.hasMany(NeedDocument, { 
    sourceKey: "id",
    foreignKey: "id_doc_list",
    as: "documentList_need_doc"
});

Service.hasOne(NeedDocument, { 
    sourceKey: "id",
    foreignKey: "id_service",
    as: "service_need_doc"
});

module.exports = {Operation, Address, Client, DocumentList, Documents, Employee, NeedDocument, Record, Service}