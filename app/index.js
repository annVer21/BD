const express = require("express");
const sequelize = require("./database/connection");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const {createAddress} = require("./data-access/address");
const {createClient} = require("./data-access/client");
const {createDocumentList} = require("./data-access/documentList");
const {createDocuments} = require("./data-access/documents");
const {createEmployee} = require("./data-access/employee");
const {createNeedDocument} = require("./data-access/needDocument");
const {createOperation} = require("./data-access/operation");
const {createRecord} = require("./data-access/record");
const {createService} = require("./data-access/service");

// createDocumentList("type");
// createService("title","description");
// createNeedDocument(1, 1);
// createClient("name", "surname", "patronymic", "phone", "MC123456");
// createRecord(1, 1 , "12.02.2025", "15:20");
// createAddress("adress", 1, 4, 5, "street");
// createEmployee("name", "surname", "patronymic", "work_schedule", "post");
// createOperation(1,1,1,123456,234567, "12.02.2025", "type");
// createDocuments(1,"type", "photo");

app.use(cors({
    corsOptions: {
        origin: (origin, callback) => {
            if(originsWhitelist.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error("Not allowed by CORS"))
            }
        }
    }
}));

app.use(express.json());

app.use(routes);

(async () => {
    try{
        await sequelize.sync() 
        app.listen(5001, () => console.log("Server start"))
    }
    catch(err){
        console.log(err)
    }
})();


