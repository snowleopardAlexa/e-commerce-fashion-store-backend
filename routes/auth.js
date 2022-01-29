const router = require("express").Router();
const User = require("../models/User")

// REGISTER 
router.post("/register", (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

   // save info to DB
   const savedUser = newUser.save();
   console.log(savedUser);

});

module.exports = router;