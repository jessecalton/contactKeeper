const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

// Connect Database
connectDB();

// Init Middleare
app.use(express.json({ extended: false }));

// Adding a route
// Takes an arrow function with a request and response object
// This is how a regular GET request gets sent
// app.get('/', (req, res) => res.send('Hello Daniel'));
// Here we're sending a JSON request
// app.get('/', (req, res) => res.json({ msg: 'Welcome to the Thicket!' }));

// Defining our backend routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Check that environment is production, and Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // This is anything that is not the aforementioned backend routes
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
  // This is saying "look at the current directory, then look at client, then build, then load index.html"
}

// Looks for an env variable PORT first, which is what we want for production
const PORT = process.env.PORT || 5000;

// Takes a port to listen on
// Takes an optional callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
