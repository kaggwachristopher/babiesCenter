const router = require("express").Router();
const Users = require("../models/user");
const passport = require("passport");
const {
  indexPage,
  registration,
  login,
  logout,
  clerk
} = require("../Controllers/controllers");

router.get("/users", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/currentUser", (req, res) => {
  res.status(200).json(req.user);
});
router.post("/register", passport.authenticate("SignUp"), (req, res) => {
  res.status(201).send("User has been created successfully");
});
router.post("/login", passport.authenticate("SignIn"), login);
router.get("/logout", logout);

module.exports = router;
