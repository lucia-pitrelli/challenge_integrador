const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/authController")

router.get("/auth/login", authControllers.loginGet);
router.post("/auth/login", authControllers.loginPost);
router.get("/auth/register", authControllers.registerGet);
router.post("/auth/register", authControllers.registerPost);
router.get("/auth/logout", authControllers.logout);



module.exports = router;