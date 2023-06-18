const express = require("express");
const { isLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
    console.log("write");
    res.end();
});

module.exports = router;