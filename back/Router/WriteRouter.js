const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
    console.log("로그인한 유저만 들어옴");
    res.render("/");
})

router.post("/post", (req, res) => {
    console.log("들어옴")
    console.log(req.body.data);
})

module.exports = router;