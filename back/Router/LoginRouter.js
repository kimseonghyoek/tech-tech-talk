const express = require("express");
const passport = require("passport");
const { isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.post(
  "/post", 
  isNotLoggedIn,
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
          } else {
            const data = {
              email: req.user[0].email,
              nickname: req.user[0].nickname
            }
            console.log(req.user[0].email);
            return res.send(data).end();
          }
        });
      }
    )(req, res, next);
  },
  (req, res) => {
    if (req.user) {
      const user = { email: req.user.email, nickname: req.user.nickname, name: req.user.name };
      res.send(user);
    }
    res.end();
  }
);

router.post("/logout", (req, res) => {
  console.log("back logout");
  res.clearCookie('Cookie!');
  res.send({ msg: "logout"});
}) 

module.exports = router;
