exports.main = (req, res) => {
    res.render("index");
};

exports.post = (req, res) => {
    res.render("post");
};

exports.detail = (req, res) => {
    res.render("detail");
};
exports.write = (req, res) => {
    res.render("write");
};