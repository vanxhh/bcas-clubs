const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
	id: String,
  name: String,
  club: String,
  president: String,
  vice_president: String,
  secretary: String,
  convenor: String,
  join: String,
  logo: String,
  desc: String,
});

module.exports = mongoose.model("Club", clubSchema);
