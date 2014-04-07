var passport = require("passport")
    , base = require('./base')
    , api = require('./api');

exports.path = function(app){
    app.get('/', base.index);
    app.post('/api/member/login', 
                passport.authenticate("local"),
                api.member.login);

    app.post('/api/member/logout', api.member.logout); 
    app.post('/api/auth/access_token', api.auth.access_token); 
    app.post('/api/test', app.oauth.authorise(), function(req, res){
        console.log("123");
        res.send('Secret area');
    }); 
};
