const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.post("/post", (req, res) => {
    console.log("들어옴")
    console.log(req.body.data);
})

module.exports = router;