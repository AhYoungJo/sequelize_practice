const express = require("express");
const controller = require("../controller/post");

const router = express.Router();

//인증받았는가? 미들웨어 함수 만들기
const isAuth = (req, res, next) => {
    //next(): express미들웨어에서 다음 미들웨어로 제어를 전달해주는 함수
    // 세션에 멤버값이 없으면 오류발생
    if (req.session && req.session.member) {
        next();
    } else {
        res.status(401).json({ success: false, message: "인증되지 않은 회원입니다." });
    }
};

//GET /all 전체글 조회
router.get("/all", isAuth, controller.all);

router.get("/:id", isAuth, controller.post);
router.post("/write", isAuth, controller.write);
router.patch("/update", isAuth, controller.update);
router.delete("/delete", isAuth, controller.delete);
router.post("/comment", isAuth, controller.comment);

module.exports = router;
