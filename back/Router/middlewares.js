exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("pass");
    next();
  } else {
    console.log("===== not login =====");
    res.redirect("/login");
  }
}

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    console.log("===== is loggedin =====");
    res.status(403).send("is_loggedin")
  }
}