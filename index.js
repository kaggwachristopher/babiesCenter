const express = require("express");
const bodyParser = require("body-parser");
const appoitments = require("./routes/appoitments");
const accountsRoutes = require("./routes/routers");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
require("./Configs/passport");
const passport = require("passport");

const app = express();

const store = new MongoStore({
  collection: "sessions",
  uri: "mongodb://localhost:27017/passport-local"
});

app.use(
  session({
    secret: "world",
    store,
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    },
    resave: true,
    rolling: true,
    saveUninitialized: false // will not save empty sessions in the store
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/appoitments", appoitments);
app.use("/api/accounts", accountsRoutes);
app.get("*", (req, res) => {
  res.status(404).send("Page Not found");
});
app.listen(3000, err => {
  if (err) console.error(err);
  mongoose
    .connect("mongodb://localhost:27017/jbc", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.info("Now connected to MongoDB!"))
    .then(() => console.info("Server listening port: 80"));
});
