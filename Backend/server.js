const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // ⬅️ Mengimpor koneksi dari db.js
const statusRoute = require("./routes/statusRoute");

const app = express();
const PORT = process.env.PORT || 3000;

// 🔗 Koneksi ke MongoDB
connectDB(); // ⬅️ Cukup panggil tanpa argumen

// 🌐 Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Untuk serve index.html dari folder public

// 📡 API routes
app.use("/api/status", statusRoute);

// 🚀 Mulai server
app.listen(PORT, () => {
  console.log(`🚀 Server aktif di http://localhost:${PORT}`);
});
