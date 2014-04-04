var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var MEMBER = module.exports = {};

MEMBER.login = function(req, res){
    console.log("login");
    res.send("login respond with a resource");
};

MEMBER.logout = function(req, res){
  res.send("logout respond with a resource");
};
