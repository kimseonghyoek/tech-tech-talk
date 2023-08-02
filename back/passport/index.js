const passport = require("passport");
const local = require("./localstrategy");
const conn = require("../DB/db");
const Strategy  = require("passport-local").Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user[0].id);
  });

  passport.deserializeUser((id, done) => {
    console.log("deserializeUser id", id);
    let userInfo;
    const sql = "SELECT * FROM user_table where id=?";
    conn.query(sql, id, (err, result) => {
      if (err) {
        console.log("error");
        done(err);
      }
      userInfo = result[0].id;
      return done(null, userInfo);
    });
  });
  
  local();
};
