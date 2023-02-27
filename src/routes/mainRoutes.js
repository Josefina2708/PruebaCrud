const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");

//---RUTAS-----
router.get("/", mainController.home)

module.exports = router;

