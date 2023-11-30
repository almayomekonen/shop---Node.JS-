const express = require("express");

const { check, body } = require("express-validator");
const User = require("../models/user.js");

const authController = require("../controllers/auth");

const router = express.Router();

router.get(
  "/login",
  check("email")
    .isEmail()
    .withMessage("please enter a valid email address")
    .custom((value, { req }) => {
      if (value !== req.body.email) {
        throw new Error("Password have to be match!");
      }
      return true;
    }),
  authController.getLogin
);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("please enter a valid email address")
      .custom((value, { req }) => {
        // if (value === "test2@test.com") {
        //   throw new Error("this email address is Forbiden.");
        // }
        // return true;

        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "E-Mail exists already, please pick a different one."
            );
          }
        });
      }),
    body(
      "password",
      "Please enter a password with only numbers and text and at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match!");
      }
      return true;
    }),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

module.exports = router;
