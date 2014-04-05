var AUTH = module.exports = {};

AUTH.access_token = function(req, res){
    var client_id = req.body.client_id;
    var client_secret = req.body.client_secret;
    
    res.send("Get access_token successful");
};

