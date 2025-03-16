const {Router} = require("express");
const {createDocumentListControler} = require("../controlers/documentList");

const router = Router();
router.post("/",createDocumentListControler);

module.exports = router
