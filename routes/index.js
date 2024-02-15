const express = require("express");
const controller = require("../controller/");

const router = express.Router();

router.get("/", controller.main);
router.get("/post", controller.post);
router.get("/post/:id", controller.detail);
router.get("/write", controller.write);
router.get("/signup", controller.signup);
router.get("/login", controller.login);
router.get("/profile", controller.profile);

module.exports = router;
