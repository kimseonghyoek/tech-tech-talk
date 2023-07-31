const express = require('express');
const { isLoggedIn } = require('./middlewares');
const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
    console.log(req.signedCookies);
    console.log(req.session);
    res.redirect("/");
  }
);

module.exports = router;