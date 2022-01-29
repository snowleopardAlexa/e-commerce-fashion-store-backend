const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// connect to DB
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DBConnection Successful"
)).catch((err) => {
   console.log(err);
});

// create REST ENDPOINTS
app.get("/api/test", () => {
  console.log("test is successful")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})