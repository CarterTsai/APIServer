/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var https = require('https');
var path = require('path');
var passport = require('passport');
var config = require('./lib/config');
var app = express();
var fs = require('fs');

// Https
var privateKey  = fs.readFileSync('/tmp/ssl/server-key.pem', 'utf8');
var certificate = fs.readFileSync('/tmp/ssl/server-cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

// all environments
app.set('port', process.env.PORT || 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'c8d62d23fc909ec5dd5c51c0119bc5a8f2702fca' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Passport Config
config.passport(passport);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes.path(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// Https
https.createServer(credentials, app).listen(443);
