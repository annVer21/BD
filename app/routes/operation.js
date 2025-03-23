const {Router} = require("express");
const {createOperationControler, getAllOperationController} = require("../controlers/operation");

const router = Router();
router.post("/",createOperationControler);
// router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllOperationController);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router