const { Member } = require("../models");

exports.signup = async (req, res) => {
    const { memberId, password } = req.body;
    const find = await Member.findOne({ where: { memberId } });
    if (find) {
        res.json({ success: false, message: "회원가입 실패, 이미 존재하는 회원입니다" });
    } else {
        const result = await Member.create({ memberId, password: password });
        console.log("signup", result);
        res.json({ success: true });
    }
};

exports.login = async (req, res) => {
    const { memberId, password } = req.body;
    const result = await Member.findOne({ where: { memberId, password: password } });
    console.log("login", result);
    res.json({ success: true, meminfo: result });
};

exports.find = async (req, res) => {
    const { id } = req.params;
    const result = await Member.findOne({ where: { id } });
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
