const User = require('../models/userSchema');

// render sign up page
module.exports.signup = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('back');
  }
  res.render('signup');
};

// render sign in page
module.exports.signin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('back');
  }
  res.render('signin');
};

// create session
module.exports.createSession = function (req, res) {
  console.log('Session created successfully');
  return res.redirect('/');
};

// signout
module.exports.signout = function (req, res) {
  req.logout();
  return res.redirect('/signin');
};

// create user
module.exports.createUser = async function (req, res) {
  const { name, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      console.log(`Passwords dont match`);
      return res.redirect('back');
    }
    const user = await User.findOne({ email });

    if (user) {
      console.log(`Email already exists`);
      return res.redirect('back');
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    await newUser.save();

    if (!newUser) {
      console.log(`Error in creating user`);
      return res.redirect('back');
    }

    return res.redirect('/users/signin');
  } catch (error) {
    console.log(`Error in creating user: ${error}`);
    res.redirect('back');
  }
};
