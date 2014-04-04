var MEMBER = module.exports = {};

MEMBER.login = function(req, res){
    res.send("login respond with a resource");
};

MEMBER.logout = function(req, res){
    res.send("logout respond with a resource");
};
