const mongoose = require("mongoose");

const WasteStatusSchema = new mongoose.Schema({
  kompartemen: String,
  jenis: String,
  waktu: Date,
  kapasitas: [Number] // [organik, anorganik]
}, { collection: "waste_status" });

module.exports = mongoose.model("WasteStatus", WasteStatusSchema);
