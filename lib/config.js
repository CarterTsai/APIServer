var CONFIG = module.exports = {};
var LocalStrategy = require('passport-local').Strategy;

CONFIG.passport = function (passport) {
    // Local Auth
    passport.use(new LocalStrategy( function(username, password, done) {
        console.log(username);
        console.log(password);
        return done(null, {});
//        User.findOne({ username: username }, function(err, user) {
//            if (err) { return done(err); }
//
//            if (!user) {
//                return done(null, false, { message: 'Incorrect username.' });
//            }
//
//            if (!user.validPassword(password)) {
//                return done(null, false, { message: 'Incorrect password.' });
//            }
//            return done(null, user);
//        });
    }));
}

CONFIG.facebook = function(passport) {

}
