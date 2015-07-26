'use strict';

var User = require('../../models/user');

module.exports = function(req, res) {
  // on github signup/login, get token from Github
  User.github(req.body, function(profile) {
    // look for user in database and update if it is there (login)
    User.findOneAndUpdate({githubId: profile.githubId}, profile, function(err, user) {
      if (err) { return res.status(500); }
      // if no user (signup), create user in database
      if (!user) {
        User.create('github', profile, function(err, newUser) {
          if (err) { return res.status(500); }
          var token = newUser.token();
          return res.send({token: token, user: newUser});
        });
      }
      var token = user.token();
      return res.send({token: token, user: user});
    });
  });
};