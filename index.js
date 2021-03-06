const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

// connect to DB
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DBConnection Successful"
)).catch((err) => {
   console.log(err);
});

// enable json to be tested in postman
app.use(express.json());

// import endpoint from routes/user.js
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})