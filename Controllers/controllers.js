const User = require("../models/user");

const controllers = {};

controllers.register = (req, res) => {
  res.status(201).send("User has been created successfully");
};
controllers.login = (req, res) => {
  if (req.principal) {
  }
  console.log();
  res.status(200).send(`Logged in as ${req.user.username}`);
};

controllers.logout = async (req, res) => {
  try {
    req.logout(
      await req.session.destroy(() => res.status(200).json("Logged Out"))
    );
  } catch (e) {
    console.error(e);
  }
};

module.exports = controllers;
