const {Router} = require("express");
const {createAddressControler,getAllAddressControler} = require("../controlers/address");

const router = Router();
router.post("/",createAddressControler);
// router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllAddressControler);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router