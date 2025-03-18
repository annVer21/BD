const {Router} = require("express");
const {createServiceControler, deleteServiceControler, getAllServiceControler} = require("../controlers/service");

const router = Router();
router.post("/",createServiceControler);
router.delete("/:id", deleteServiceControler);
router.get("/", getAllServiceControler);

module.exports = router

