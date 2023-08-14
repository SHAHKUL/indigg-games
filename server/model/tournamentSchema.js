const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  Status: {
    type: String,
  },
});

const List = mongoose.model("tournament", DataSchema);

module.exports = List;
