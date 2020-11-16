const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

// Conntect to Mongo
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB conntected"))
  .catch((err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  });

const records = require("./routes/records");

const app = express();

app.use(cors());
app.use(express.json());

// Use routes
app.use("/api/records", records);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("./client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
