var BASE = module.exports = {};

BASE.index = function(req, res) {
    res.render("index", {title:"Hello"});
};
