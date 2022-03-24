const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  organizer: String,
  cheif_guest: String,
  desc: String,
  timing: String,
  poster: String,
  part_link: String,
});

module.exports = mongoose.model("Event", eventSchema);
