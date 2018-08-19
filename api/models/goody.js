const mongoose = require("mongoose");

const goodySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  strain: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  remaining: {
    type: String,
    required: true
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
    required: true
  }
});

module.exports = mongoose.model("Goody", goodySchema);
