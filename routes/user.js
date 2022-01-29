const router = req("express").Router();

router.get("/usertest", (req, res) => {
    res.send("user test is successful");
});

lh:5000/api/user/usertest

module.exports = router
