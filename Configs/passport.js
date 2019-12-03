const passport = require("passport");
const User = require("../models/user");
const { SignIn, SignUp } = require("./LocalStrategy");

// Методи збереження Користувачів в сесію та видобувати Їх з них.
// give Passport the user’s id to store
passport.serializeUser((user, done) => {
  return done(null, user._id);
});

// we fetch the user from the database given an id
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (e) {
    return done(e);
  }
});

passport.use("SignIn", SignIn);
passport.use("SignUp", SignUp);
