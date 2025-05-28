const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/SmartTrashBin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB lokal terkoneksi");
  } catch (error) {
    console.error("❌ Gagal koneksi MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;


