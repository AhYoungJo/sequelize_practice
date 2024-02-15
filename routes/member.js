const express = require("express");
const controller = require("../controller/member");

const router = express.Router();

router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.get("/:memberId", controller.find);
router.post("/update", controller.update);
router.post("/delete", controller.delete);

module.exports = router;
