const { Post, Comment } = require("../models");

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
    // const result = await Post.findOne({
    //     where: {
    //         id: req.params.id,
    //     },
    // });
    const result = await Post.findByPk(req.params.id, { include: [{ model: Comment }] });
    //include : 쿼리를 실행할 때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
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

exports.comment = async (req, res) => {
    const { id, contents } = req.body;
    const result = await Comment.create({ contents, postId: id });
    console.log("comment", result);
    res.json({ success: true });
};
