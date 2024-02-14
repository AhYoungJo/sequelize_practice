const express = require("express");
const controller = require("../controller/post");

const router = express.Router();

//GET /all 전체글 조회
router.get("/all", controller.all);

router.get("/:id", controller.post);
router.post("/write", controller.write);
router.patch("/update", controller.update);
router.delete("/delete", controller.delete);

module.exports = router;
