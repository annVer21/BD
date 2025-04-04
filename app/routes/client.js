const {Router} = require("express");
const {createClientControler, getAllClientControler} = require("../controlers/client");

const router = Router();
router.post("/", createClientControler);
// router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllClientControler);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router