// Reference : http://danialk.github.io/blog/2013/02/23/authentication-using-passportjs/
var CONFIG = module.exports = {};
var LocalStrategy = require('passport-local').Strategy;

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
