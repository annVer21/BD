const {Router} = require("express");
const {createRecordControler, getAllRecordControler} = require("../controlers/record");

const router = Router();
router.post("/", createRecordControler);
// router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllRecordControler);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router