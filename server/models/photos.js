const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: String,
  link: String,
  image: String,
});

module.exports = mongoose.model("Photo", photoSchema);
