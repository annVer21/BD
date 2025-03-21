const {Router} = require("express");
const documentListRouter = require("./documentList");
const serviceRouter = require("./service");
const addressRouter = require("./address");
const clientRouter = require("./client");
const needDocumentRouter = require("./needDocument");
const employeeRouter = require("./employee");
const recordRouter = require("./record");
const router = Router();

router.use("/document-list", documentListRouter);
router.use("/service", serviceRouter);
router.use("/address", addressRouter);
router.use("/client", clientRouter);
router.use("/need-document", needDocumentRouter);
router.use("/employee", employeeRouter);
router.use("/record", recordRouter);


module.exports = router