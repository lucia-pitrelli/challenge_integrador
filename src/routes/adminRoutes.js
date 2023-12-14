const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminController");

router.get("/admin", adminControllers.admin);
router.get("/admin/create", adminControllers.createGet);
router.post("/admin/create", adminControllers.createPost);
router.get("/admin/edit/:id", adminControllers.editGet);
router.put("/admin/edit/:id", adminControllers.editPut);
router.delete("/admin/delete/:id", adminControllers.delete);

module.exports = router;
