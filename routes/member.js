const express = require("express");
const controller = require("../controller/member");

const router = express.Router();

router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.get("/info", controller.find);
router.patch("/:memberId/update", controller.update);
router.delete("/:memberId/delete", controller.delete);
router.get("/logout", controller.logout);
// 쿠키 가져오기
router.get("/getCookie", controller.getCookie);

module.exports = router;
