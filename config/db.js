//Use mongoose to connect to our database
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // this gets the variable from default.json

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // params to avoid warnings in the console
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // exit with failure, that's what the 1 is for
  }
};

module.exports = connectDB;
