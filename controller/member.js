const { Member, Profile } = require("../models");

exports.signup = async (req, res) => {
    const { memberId, password, username, age, email } = req.body;
    const find = await Member.findOne({ where: { memberId } });
    if (find) {
        res.json({ success: false, message: "회원가입 실패, 이미 존재하는 회원입니다" });
    } else {
        const result = await Member.create({ memberId, password: password });
        console.log("signup", result);
        const result2 = await Profile.create({ username, age, email, memberId: result.memberId });
        res.json({ success: true });
    }
};

exports.login = async (req, res) => {
    const { memberId, password } = req.body;
    const result = await Member.findOne({ where: { memberId, password } });
    console.log("login", result);
    if (result) {
        res.json({ success: true, meminfo: result });
    } else {
        res.json({ success: false });
    }
};

exports.find = async (req, res) => {
    // console.log("ccccc");
    const { memberId } = req.params;
    console.log(memberId);
    const result = await Member.findByPk(memberId, { include: [{ model: Profile }] });
    console.log("find", result);
    res.json({ success: true, meminfo: result });
};

exports.update = async (req, res) => {
    const { id, password } = req.body;
    const result = await Member.update({ password: password }, { where: { id } });
    console.log("update", result);
    res.json({ success: true });
};

exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id } });
    console.log("delete", result);
    res.json({ success: true });
};
