const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminID: String,
}, { collection: 'admins' });

module.exports = mongoose.model("Admin", adminSchema);
