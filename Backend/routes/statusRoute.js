const express = require("express");
const router = express.Router();
const WasteStatus = require("../models/WasteStatus");

// GET: Ambil data terakhir
router.get("/", async (req, res) => {
  try {
    const latest = await WasteStatus.findOne().sort({ waktu: -1 }).limit(1);
    res.json(latest);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data" });
  }
});

// POST: Tambah data baru
router.post("/", async (req, res) => {
  try {
    const newStatus = new WasteStatus(req.body);
    const saved = await newStatus.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Data tidak valid" });
  }
});

module.exports = router;
