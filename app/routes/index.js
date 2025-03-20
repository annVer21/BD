const {Router} = require("express");
const documentListRouter = require("./documentList");
const serviceRouter = require("./service");
const addressRouter = require("./address");
const clientRouter = require("./client");
const router = Router();

router.use("/document-list", documentListRouter);
router.use("/service", serviceRouter);
router.use("/address", addressRouter);
router.use("/client", clientRouter);

module.exports = router