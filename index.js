const express = require('express');
const db = require('./config/mongoose');
const app = express();

const PORT = 8000;

app.use(express.urlencoded({ extended: true }));

// set ejs as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(PORT, function (error) {
  if (error) {
    console.log(`Error in connecting to server: ${error}`);
    return;
  }
  console.log(`Server running on port: ${PORT}`);
});
