var base = require('./base');
var api = require('./api');

exports.path = function(app){
    app.get('/', base.index);
    app.get('/api/member/login', api.member.login);
    app.get('/api/member/logout', api.member.logout); 
};


