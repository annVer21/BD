const {Router} = require("express");
const {createDocumentListControler, deleteDocumentListControler, getAllDocumentListControler} = require("../controlers/documentList");

const router = Router();
router.post("/",createDocumentListControler);
router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllDocumentListControler);

module.exports = router

