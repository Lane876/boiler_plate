const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./db");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hello world second time");
});

app.listen(5000, console.log("Server started on port 5000"));
