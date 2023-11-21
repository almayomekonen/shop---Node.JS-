const express = require("express");

const authControllers = require("../controllers/auth");

const routes = express.Router();

routes.get("/login", authControllers.getLogin);

routes.post("/login", authControllers.postLogin);

routes.post("/logout", authControllers.postLogout);

module.exports = routes;
