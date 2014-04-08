var MODEL = module.exports = {};

var oauthAccessTokens = [],
    oauthRefreshTokens = [],
    oauthClients = [
        {
            clientId : 'thom',
            clientSecret : 'nightworld',
            redirectUri : ''
        }
    ],
    authorizedClientIds = {
        password: [
            'thom'
        ],
        authorization_code : [
            'thom'
        ],
        refreshToken: [
          'thom'
        ]
    },
    users = [
        {
        id : '123',
        username: 'thomseddon',
        password: 'nightworld'
        }
    ];

// Debug function to dump the state of the data stores
MODEL.dump = function() {
  console.log('oauthAccessTokens', oauthAccessTokens);
  console.log('oauthClients', oauthClients);
  console.log('authorizedClientIds', authorizedClientIds);
  console.log('oauthRefreshTokens', oauthRefreshTokens);
  console.log('users', users);
};


//  Required

MODEL.getAccessToken = function (bearerToken, callback) {
    for(var i = 0, len = oauthAccessTokens.length; i < len; i++) {
        var elem = oauthAccessTokens[i];
        if(elem.accessToken === bearerToken) {
            return callback(false, elem);
        }
    }
    callback(false, false);
}

MODEL.getClient = function (clientId, clientSecret, callback) {
    for(var i = 0, len = oauthClients.length; i < len; i++) {
        var elem = oauthClients[i];
        if(elem.clientId === clientId && elem.clientSecret === clientSecret) {
            console.log(elem);
            return callback(false, elem);
        }
}


    callback(false, false);
}

MODEL.getAuthCode = function (refreshToken, callback) {
    if(refreshToken === "abc123") {
        callback(false, {
            clientId: 'thom',
            expires: new Date(),
            userId: '123'
        });
    } else {
        callback(false, false);
    }
}

MODEL.getRefreshToken = function (bearerToken, callback) {
    for(var i = 0, len = oauthRefreshTokens.length; i < len; i++) {
        var elem = oauthRefreshTokens[i];
        if(elem.refreshToken === bearerToken) {
            return callback(false, elem);
        }
    }
    callback(false, false);
}

MODEL.grantTypeAllowed = function (clientId, grantType, callback) {
    console.log(grantType);
  callback(false, authorizedClientIds[grantType] &&
    authorizedClientIds[grantType].indexOf(clientId.toLowerCase()) >= 0);
};

MODEL.saveAccessToken = function (accessToken, clientId, expires, userId, callback) {
  oauthAccessTokens.unshift({
    accessToken: accessToken,
    clientId: clientId,
    userId: userId,
    expires: expires
  });

  callback(false);
};

MODEL.saveRefreshToken = function (refreshToken, clientId, expires, userId, callback) {
  oauthRefreshTokens.unshift({
    refreshToken: refreshToken,
    clientId: clientId,
    userId: userId,
    expires: expires
  });

  callback(false);
};


// Required to support password grant type
 
MODEL.getUser = function (username, password, callback) {
    for(var i = 0, len = users.length; i < len; i++) {
        var elem = users[i];
        if(elem.username === username && elem.password === password) {
            return callback(false, elem);
        }
    }
    callback(false, false); 
}
