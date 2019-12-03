const router = require("express").Router();
const Users = require("../models/user");
const passport = require("passport");
const { login, logout, register } = require("../Controllers/controllers");

router.get("/users", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});
router.get("/currentUser", (req, res) => {
  res.status(200).json(req.user);
});
router.post("/register", passport.authenticate("SignUp"), register);
router.post("/login", passport.authenticate("SignIn"), login);
router.get("/logout", logout);

module.exports = router;
