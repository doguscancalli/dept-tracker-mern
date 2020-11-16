const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  amount: {
    type: Number,
  },
  dueDate: {
    type: Date,
  },
  type: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Record", RecordSchema);
