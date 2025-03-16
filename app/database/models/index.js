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
    sourceKey: "id",
    foreignKey: "id_service",
    as: "service"
});

Operation.hasMany(Record, {
    sourceKey: "id",
    foreignKey: "id_record",
    as: "record"
});

// Operation.hasMany(Documents, {
//     sourceKey: "id",
//     foreignKey: "id_documents",
//     as: "documents"
// });

Operation.hasMany(Employee, {
    sourceKey: "id",
    foreignKey: "id_employee",
    as: "employee"
});

Documents.hasMany(Operation, {
    sourceKey: "id",
    foreignKey: "id_operation",
    as: "operation"
});

Address.hasMany(Client, {
    sourceKey: "id",
    foreignKey: "id_client",
    as: "client"
});

Record.hasMany(Service, {
    sourceKey: "id",
    foreignKey: "id_service",
    as: "service"
});

Record.hasMany(Client, {
    sourceKey: "id",
    foreignKey: "id_client",
    as: "client"
});

NeedDocument.hasMany(DocumentList, {
    sourceKey: "id",
    foreignKey: "id_doc_list",
    as: "documentList"
});

NeedDocument.hasOne(Service, {
    sourceKey: "id",
    foreignKey: "id_service",
    as: "service"
});


module.exports = {Operation, Address, Client, DocumentList, Documents, Employee, NeedDocument, Record, Service}