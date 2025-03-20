const {Router} = require("express");
const {createClientControler} = require("../controlers/client");

const router = Router();
router.post("/", createClientControler);
// router.delete("/:id", deleteDocumentListControler);
// router.get("/", getAllDocumentListControler);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router