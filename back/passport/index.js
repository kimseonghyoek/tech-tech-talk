const passport = require("passport");
const local = require("./localstrategy");
const conn = require("../DB/db");
const Strategy  = require("passport-local").Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serialize User ", user[0].id);
    done(null, user);
  });

  passport.deserializeUser((email, done) => {
    console.log("deserializeUser email", email);
    let userInfo;
    const sql = "SELECT * FROM user_table where email=?";
    conn.query(sql, email, (err, result) => {
      if (err) {
        console.log("error");
        done(err);
      }
      const json = JSON.stringify(result[0]);
      userInfo = JSON.parse(json);
      done(null, userInfo.id);
    });
  });
  
  local();
};
