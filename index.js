const express = require('express');
const db = require('./config/mongoose');
const app = express();
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startegy');

const PORT = 8000;

app.use(express.urlencoded({ extended: true }));

// set ejs as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(
  session({
    secret: 'randomsecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 100 },
  })
);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// express router
app.use('/', require('./routes'));

app.listen(PORT, function (error) {
  if (error) {
    console.log(`Error in connecting to server: ${error}`);
    return;
  }
  console.log(`Server running on port: ${PORT}`);
});
