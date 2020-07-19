const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send('Register a user');
});
// '/' pertains to POST api/users, as defined in our server.js file

// MUST export the router or it won't work
module.exports = router;
