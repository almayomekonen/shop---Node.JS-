const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");
const userIsAuth = require("../middleware/userIsAuth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", userIsAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", userIsAuth, adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", userIsAuth, adminController.postAddProduct);

router.get(
  "/edit-product/:productId",
  userIsAuth,
  adminController.getEditProduct
);

router.post("/edit-product", userIsAuth, adminController.postEditProduct);

router.post("/delete-product", userIsAuth, adminController.postDeleteProduct);

module.exports = router;
