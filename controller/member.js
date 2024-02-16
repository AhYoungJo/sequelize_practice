const { Member, Profile } = require("../models");

exports.signup = async (req, res) => {
    const { memberId, password, username, age, email } = req.body;
    const find = await Member.findOne({ where: { memberId } });
    if (find) {
        res.json({
            success: false,
            message: "회원가입 실패, 이미 존재하는 회원입니다",
        });
    } else {
        const result = await Member.create({ memberId, password: password });
        console.log("signup", result);
        const result2 = await Profile.create({
            username,
            age,
            email,
            memberId: result.memberId,
        });
        res.json({ success: true });
    }
};

exports.login = async (req, res) => {
    const { memberId, password, save } = req.body;
    const SAVEID = "saveID";
    const result = await Member.findOne({ where: { memberId, password } });
    console.log("login", result);
    if (result) {
        req.session.member = result;
        if (save === "save") {
            res.cookie(SAVEID, result.memberId, { maxAge: 100000, httpOnly: true });
        } else {
            res.clearCookie(SAVEID);
        }
        res.json({ success: true, meminfo: result });
    } else {
        res.json({ success: false });
    }
};

exports.find = async (req, res) => {
    // console.log("ccccc");
    const { memberId } = req.session.member;
    console.log(memberId);
    const result = await Member.findByPk(memberId, {
        attributes: ["memberId", "password"],
        include: [{ model: Profile, attributes: ["username", "age", "email"] }],
    });
    console.log("find", result);
    res.json({ success: true, meminfo: result });
};

exports.update = async (req, res) => {
    const { memberId } = req.session.member;
    const { password, username, age, email } = req.body;
    const result = await Member.update({ password: password }, { where: { memberId } });
    console.log("update", result);
    const result2 = await Profile.update({ username, age, email }, { where: { memberId } });
    res.json({ success: true });
};

exports.delete = async (req, res) => {
    const { memberId } = req.session.member;
    const result = await Member.destroy({ where: { memberId } });
    console.log("delete", result);
    res.json({ success: true });
};

exports.logout = async (req, res) => {
    if (req.session.member) {
        req.session.destroy(() => {
            res.json({ success: true });
        });
    } else {
        res.json({ success: false, message: "로그인 상태가 아닙니다." });
    }
};

exports.getCookie = async (req, res) => {
    res.json({ result: req.cookie });
    // req.cookie
};
