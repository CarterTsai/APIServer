var base = require('./base');
var api = require('./api');

exports.path = function(app){
    app.get('/', base.index);
    app.post('/api/member/login', 
                passport.authenticate("local"}),
                api.member.login);
    app.post('/api/member/logout', api.member.logout); 
};


