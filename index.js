const express = require('express');

const app = express();

const PORT = 8000;

app.listen(PORT, function (error) {
  if (error) {
    console.log(`Error in connecting to server: ${error}`);
    return;
  }
  console.log(`Server running on port: ${PORT}`);
});
