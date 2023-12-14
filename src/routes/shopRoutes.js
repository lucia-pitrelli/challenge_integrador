const express = require("express");
const router = express.Router();
const shopControllers = require("../controllers/shopController");

router.get("/", shopControllers.shop);
router.get("/item/:id", shopControllers.item);
router.post("/item/:id/add", shopControllers.itemPost);
router.get("/cart", shopControllers.cartGet);
router.post("/cart", shopControllers.cartPost);

module.exports = router;
