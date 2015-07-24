'use strict';

var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var Request = require('request');
var qs = require('querystring');
var moment = require('moment');
var User;


var userSchema = new mongoose.Schema({
  githubId: { type: String, required: true },
  name: { type: String, required: true },
  githubPage: { type: String, required: true },
  username: { type: String, required: true },
  photoUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true }
});


userSchema.statics.github = function(payload, cb) {
  var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  var userApiUrl = 'https://api.github.com/user';
  var params = {
    code: payload.code,
    client_id: payload.clientId,
    redirect_uri: payload.redirectUri,
    client_secret: process.env.GITHUB_SECRET
  };

  Request.get({url: accessTokenUrl, qs: params}, function(err, res, accessToken) {
    var headers = { 'User-Agent': 'Satellizer' };
    accessToken = qs.parse(accessToken);
    Request.get({url: userApiUrl, qs: accessToken, headers: headers, json: true}, function(err, respsonse, profile) {
      console.log('profile', profile);
      cb({ githubId: profile.id, name: profile.name, photoUrl: profile.avatar_url, username: profile.login, githubPage: profile.html_url });
    });
  });
};

userSchema.statics.create = function(provider, profile, cb) {
  var query = {};
  query[provider] = profile[provider];
  User.findOne(query, function(err, user) {
    // if (err) { return cb(err); }
    console.log('err in create', err);
    console.log('user in create', user);
    if (user) { return cb(err, user); }
    console.log('got passed return');
    var newUser = new User(profile);
    newUser.save(cb);
  });
};

userSchema.methods.token = function() {
  var payload = {
    sub: this._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
};


User = mongoose.model('User', userSchema);
module.exports = User;