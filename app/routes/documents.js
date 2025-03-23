const {Router} = require("express");
const {createDocumentsControler, getAllDocumentsController} = require("../controlers/documents");

const router = Router();
router.post("/",createDocumentsControler);
// router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllDocumentsController);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router