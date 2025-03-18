const Operation = require("./Operation")
const Address = require("./Address")
const Client = require("./Client")
const DocumentList = require("./DocumentList")
const Documents = require("./Documents")
const Employee = require("./Employee")
const NeedDocument = require("./NeedDocument")
const Record = require("./Record")
const Service = require("./Service")


Operation.hasMany(Service, {
    sourceKey: "id_service",
    foreignKey: "id",
    as: "service"
});

Operation.hasMany(Record, {
    sourceKey: "id_record",
    foreignKey: "id",
    as: "record"
});

// Operation.hasMany(Documents, {
//     sourceKey: "id",
//     foreignKey: "id_documents",
//     as: "documents"
// });

Operation.hasMany(Employee, {
    sourceKey: "id_employee",
    foreignKey: "id",
    as: "employee"
});

Documents.hasMany(Operation, {
    sourceKey: "id_operation",
    foreignKey: "id",
    as: "operation"
});

Address.hasMany(Client, {
    sourceKey: "id_client",
    foreignKey: "id",
    as: "client"
});

Record.hasMany(Service, {
    sourceKey: "id_service",
    foreignKey: "id",
    as: "service"
});

Record.hasMany(Client, {
    sourceKey: "id_client",
    foreignKey: "id",
    as: "client"
});

NeedDocument.hasMany(DocumentList, {
    sourceKey: "id_doc_list",
    foreignKey: "id",
    as: "documentList"
});

NeedDocument.hasOne(Service, {
    sourceKey: "id_service",
    foreignKey: "id",
    as: "service"
});

// поменять fk и pk
module.exports = {Operation, Address, Client, DocumentList, Documents, Employee, NeedDocument, Record, Service}