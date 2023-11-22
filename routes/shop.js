const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
const userIsAuth = require("../middleware/userIsAuth");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", userIsAuth, shopController.getCart);

router.post("/cart", userIsAuth, shopController.postCart);

router.post(
  "/cart-delete-item",
  userIsAuth,
  shopController.postCartDeleteProduct
);

router.post("/create-order", userIsAuth, shopController.postOrder);

router.get("/orders", userIsAuth, shopController.getOrders);

module.exports = router;
