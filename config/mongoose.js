const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/.env' });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: Mongodb');
});

module.exports = db;
