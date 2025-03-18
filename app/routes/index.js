const {Router} = require("express");
const documentListRouter = require("./documentList");
const serviceRouter = require("./service");
const router = Router();

router.use("/document-list", documentListRouter);
router.use("/service", serviceRouter);


module.exports = router