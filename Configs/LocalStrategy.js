const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

// login
exports.SignIn = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  async (username, password, done) => {
    try {
      const candidate = await User.findOne({
        username,
        password
      });
      if (candidate) {
        return done(null, candidate);
      } else {
        return done(null, false);
      }
    } catch (e) {
      return done(e);
    }
  }
);

// registration
exports.SignUp = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
    roleField: "role",
    passReqToCallback: true
  },
  async (req, username, password, done) => {
    try {
      const candidate = await User.countDocuments({
        username
      });
      if (candidate) {
        return done(new Error("This username is already taken"));
      } else {
        return done(
          false,
          await User.create({
            username,
            password: req.body.password,
            role: req.body.role
          })
        );
      }
    } catch (e) {
      return done(e);
    }
  }
);
