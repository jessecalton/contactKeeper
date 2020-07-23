const jwt = require('jsonwebtoken');
const config = require('config');
// Using middleware for protected routes

// call next() function to move on to the next piece of middleware
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // verifying the token with the secret
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // have access to the user inside the route
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
