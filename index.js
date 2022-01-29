const express = require("express");
const app = express();
const mongoose = require("mongoose");

// connect to DB
mongoose.connect(
    "mongodb+srv://alexa:Valencia19@e-commerce-fashion-stor.fsbmt.mongodb.net/CruelaDeVil?retryWrites=true&w=majority"
).then(() => console.log("DBConnection Successfull"
)).catch((err) => {
   console.log(err);
});

app.listen(5000, () => {
    console.log("Backend server is running")
})