const mongoose = require("mongoose");

const restroomSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  address: String
});

module.exports = mongoose.model("Restroom", restroomSchema);
