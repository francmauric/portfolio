const express = require("express");
const router = express.Router();
const controller = require("../controller/homeController")
const controller2 =require("../controller/homeController")

router.get("/", controller.home)
router.get("/home",controller2.home2)

module.exports = router;