exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    console.log("===== not login =====")
    res.status(403).send("not_login");
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