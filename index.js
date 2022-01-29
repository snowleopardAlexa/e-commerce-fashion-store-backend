const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

// connect to DB
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DBConnection Successful"
)).catch((err) => {
   console.log(err);
});

// enable json to be tested in postman
app.use(express.json());

// import endpoints
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})