const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  team: {
    type: String,
  },
  win: {
    type: String,
  },
  lose: {
    type: String,
  },
  point: {
    type: String,
  },
  totalmatch: {
    type: String,
  },
  user_id: {
    type: String,
  },
});

const Teams = mongoose.model("teams", DataSchema);

module.exports = Teams;
