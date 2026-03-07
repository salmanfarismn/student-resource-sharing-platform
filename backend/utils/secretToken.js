const jwt = require("jsonwebtoken");

module.exports = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.TOKEN_KEY,
    { expiresIn: "1d" }
  );
};