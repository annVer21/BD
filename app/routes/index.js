const {Router} = require("express");
const documentListRouter = require("./documentList")
const router = Router();

router.use("/document-list", documentListRouter);


module.exports = router