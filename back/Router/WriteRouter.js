const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("write");
    res.end();
});

module.exports = router;