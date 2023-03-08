const express = require("express");
const passport = require("passport");
const { isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.post(
  "/post", isNotLoggedIn,
  (req, res, next) => {
    passport.authenticate(
      "local", {session: true},
      (err, user, info) => {
        if (err) {
          console.error(err);
          next(err);
        }
        if (info) {
          return res.status(401).send(info.message);
        }
        req.login(user, (loginErr) => {
          if (loginErr) {
            return next(loginErr);
          }
          console.log("=========== login router ===========");
          console.log("isAuthenticated: ", req.isAuthenticated());
          return res.redirect("/");
        });
      }
    )(req, res, next);
  },
  (req, res) => {
    if (req.user) {
      const user = { email: req.user.email, nickname: req.user.nickname };
      res.send(user);
    }
    res.end();
  }
);

router.post("/logout", (req, res) => {
  console.log("back logout");
}) 

module.exports = router;
