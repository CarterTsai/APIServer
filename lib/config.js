// Reference : http://danialk.github.io/blog/2013/02/23/authentication-using-passportjs/
var CONFIG = module.exports = {};
var LocalStrategy = require('passport-local').Strategy;

CONFIG.passport = function (passport) {
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        done(null,user);
    });
        
    // Local Auth
    passport.use(new LocalStrategy( function(username, password, done) {
        console.log(username);
        console.log(password);
        return done(null, {});
    }));
}

CONFIG.facebook = function(passport) {

}
