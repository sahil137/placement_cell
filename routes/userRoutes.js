const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/userControllers');

// ------------------------- Get Requests -----------------------

// router.get('/home', userController.homePage);
router.get('/signup', userController.signup);
router.get('/signin', userController.signin);
router.get('/signout', passport.checkAuthentication, userController.signout);

// ------------------------- Post Request -----------------------

router.post('/create', userController.createUser);
router.post(
  '/create-session',
  passport.authenticate('local', { failureRedirect: '/users/signin' }),
  userController.createSession
);

module.exports = router;
