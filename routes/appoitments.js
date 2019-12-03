const express = require("express");
const Appoitment = require("../models/appoitments");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  const appoitments = await loadAppoitments();
  res.send(await appoitments.find({}).toArray());
});
router.get("/:id", async (req, res) => {
  const appoitments = await loadAppoitments();
  res.send(
    await appoitments.findOne({ _id: new mongodb.ObjectID(req.params.id) })
  );
});
router.post("/", async (req, res) => {
  const appoitments = await loadAppoitments();
  await appoitments.insertOne(req.body);
  console.log("appoitment saved");
  res.status(201).send("New appoitment created");
});
router.delete("/:id", async (req, res) => {
  const appoitments = await loadAppoitments();
  await appoitments.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send("Appoitment has been deleted successfully");
});

async function loadAppoitments() {
  // mongoose
  // const mongoose = require("mongoose");
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost/jbc",
    () => {
      console.log(`Connected to database`);
    },
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return client.db("jbc").collection("appoitments");
}

module.exports = router;
