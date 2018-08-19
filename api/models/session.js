const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  label: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Session", sessionSchema);
