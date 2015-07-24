'use strict';

var User = require('../../models/user');

module.exports = function(req, res) {
  User.github(req.body, function(profile) {
    User.create('github', profile, function(err, user) {
      if (err) { return res.status(500); }
      var token = user.token();
      res.send({token: token, user: user});
    });
  });
};