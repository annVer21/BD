const {Router} = require("express");
const {createDocumentListControler, deleteDocumentListControler, getAllDocumentListControler, updateDocumentListControler, getByIdDocumentListControler} = require("../controlers/documentList");

const router = Router();
router.post("/",createDocumentListControler);
router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllDocumentListControler);
router.get("/:id", getByIdDocumentListControler);
router.put("/", updateDocumentListControler);

module.exports = router

