const {Router} = require("express");
const {createNeedDocumentControler, getAllNeedDocumentController} = require("../controlers/needDocument");

const router = Router();
router.post("/", createNeedDocumentControler);
// router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllNeedDocumentController);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router