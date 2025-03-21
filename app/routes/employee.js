const {Router} = require("express");
const {createEmployeeControler, getAllEmployeeControler} = require("../controlers/employee");

const router = Router();
router.post("/", createEmployeeControler);
// router.delete("/:id", deleteDocumentListControler);
router.get("/", getAllEmployeeControler);
// router.get("/:id", getByIdDocumentListControler);
// router.put("/", updateDocumentListControler);

module.exports = router