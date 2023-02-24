const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post(
  "/post",
  (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        };
        return res.redirect("/");
      });
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
