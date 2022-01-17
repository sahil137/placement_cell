const User = require('../models/userSchema');

// ----------------- Get requests ----------------------

// render home page
module.exports.homePage = function (req, res) {
  return res.render('home');
};

// render sign up page
module.exports.signup = function (req, res) {
  res.render('signup');
};

// render sign in page
module.exports.signin = function (req, res) {
  res.render('signin');
};

// -------------- Posts requests ---------------------
