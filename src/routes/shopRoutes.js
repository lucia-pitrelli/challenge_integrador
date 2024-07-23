const express = require("express");
const router = express.Router();
const shopControllers = require("../controllers/shopController");

router.get("shop", shopControllers.shop);
router.get("shop/item/:id", shopControllers.item);
router.post("shop/item/:id/add", shopControllers.itemPost);
router.get("shop/cart", shopControllers.cartGet);
router.post("shop/cart", shopControllers.cartPost);

module.exports = router;
