const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/foods";

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connect to MongoDB server");
});

db.on("error", (err) => {
  console.log("Connect to MongoDB error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
