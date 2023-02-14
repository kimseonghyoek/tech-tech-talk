const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post(
  "/post",
  (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", {
      session: false,
    })(req, res, next);
  },
  (req, res) => {
    if (req.user) {
      const user = { email: req.user.email, nickname: req.user.nickname };
      res.send(user);
    }
    res.end();
  }
);

module.exports = router;
