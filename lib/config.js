// Reference : http://danialk.github.io/blog/2013/02/23/authentication-using-passportjs/
var CONFIG = module.exports = {};
var LocalStrategy = require('passport-local').Strategy;

var oauthserver = require('node-oauth2-server');
var memorystore = require("../model/oauth.js");

CONFIG.passport = function (passport) {
    
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    
    passport.deserializeUser(function(id, done) {
        done(null,user);
    });
        
    // Local Auth
    passport.use(new LocalStrategy( function(username, password, done) {
        var user = {"uid":"testid"};
        return done(null, user);
    }));
}

CONFIG.facebook = function(passport) {

}

CONFIG.oauth2 = function(app) {
    app.oauth = oauthserver({
        model: memorystore,
        grants: ['password'],
        debug: true
    });
    
    app.all('/oauth/token', app.oauth.grant()); 
    app.use(app.oauth.errorHandler());
};
