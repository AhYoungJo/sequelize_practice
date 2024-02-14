const { Post } = require("../models");

//전체글 조회
exports.all = async (req, res) => {
    const result = await Post.findAll({ order: [["id", "desc"]] });
    // select DATE_FORMAT(NOW(), '%Y-%m-%d') as createdAt,
    console.log("all", result);
    res.json({ sucess: true, data: result });
};

//글 하나 조회
exports.post = async (req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({
        where: {
            id: req.params.id,
        },
    });
    res.json({ success: true, notice: result });
};

exports.write = async (req, res) => {
    const { title, contents } = req.body;
    const result = await Post.create({
        title,
        contents,
    });
    console.log("write", result.id);
    res.json({ success: true, result: result.id });
};

exports.update = async (req, res) => {
    const { id, title, contents } = req.body;
    const result = await Post.update(
        {
            title,
            contents,
        },
        { where: { id } }
    );
    console.log("update", result);
    res.json({ success: true });
};

exports.delete = async (req, res) => {
    const result = await Post.destroy({ where: { id: req.body.id } });
    console.log("delete", result);
    res.json({ success: true });
};
