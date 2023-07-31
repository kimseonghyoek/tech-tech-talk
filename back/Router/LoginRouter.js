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
        if (user) {
          console.log(user)
          req.login(user, (loginErr) => {
            if (loginErr) {
              return next(loginErr);
            } else {
              const data = {
                email: req.user[0].email,
                nickname: req.user[0].nickname
              }
              return res.send(data).end();
            }
          });
        }
      }
    )(req, res, next);
  }
);

router.get("/logout", (req, res) => {
  console.log("back logout");
  res.clearCookie('Cookie!');
  res.send({ msg: "logout"});
}) 

module.exports = router;
