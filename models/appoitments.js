var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appoitmentSchema = new Schema({
  username: String
});

const appoitmentModel = mongoose.model("appoitment", appoitmentSchema);
module.exports = appoitmentModel;
