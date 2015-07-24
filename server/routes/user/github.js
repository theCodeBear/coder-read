'use strict';

var User = require('../../models/user');

module.exports = function(req, res) {
  User.github(req.body, function(profile) {
    console.log('profile returned from github method in model', profile);
    User.create('github', profile, function(err, user) {
      if (err) { console.log('ERROR returning from user create', user); return res.status(500); }
      console.log('user in route', user);
      var token = user.token();
      res.send({token: token, user: user});
    });
  });
};