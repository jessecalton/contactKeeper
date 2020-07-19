const express = require('express');

const app = express();

// Adding a route
// Takes an arrow function with a request and response object
// This is how a regular GET request gets sent
// app.get('/', (req, res) => res.send('Hello Daniel'));
// Here we're sending a JSON request
app.get('/', (req, res) => res.json({ msg: 'Welcome to the Thicket!' }));

// Defining our backend routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Looks for an env variable PORT first, which is what we want for production
const PORT = process.env.PORT || 5000;

// Takes a port to listen on
// Takes an optional callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
