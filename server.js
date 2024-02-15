const express = require("express");
//서버가 작동하면 db도 자연스럽게 실행되게끔 설정하기 위해 우선 db 변수에 models index파일가져오기
const db = require("./models");
const app = express();
const PORT = 8080;

app.use(express.json());
app.set("view engine", "ejs");

//router
const indexRouter = require("./routes");
app.use("/", indexRouter);

const postRouter = require("./routes/post");
app.use("/api/post", postRouter);

const memberRouter = require("./routes/member");
app.use("/api/member", memberRouter);

//404 error
app.get("*", (req, res) => {
    res.status(404).render("404");
});

//서버가 실행되면서 테이블싱크(=테이블 동기화)하기
//force: true = 항상 테이블을 삭제 후 재생성
//(기본값)force: false = 테이블이 존재하면 pass, 없으면 생성
//so, 처음엔 true로 값을 주고, 이후에 여러 칼럼이 생성되고 db를 조작해야 할 때는 false 값을 주는 것이 보통이다
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
