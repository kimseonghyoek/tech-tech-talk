const passport = require("passport");
const local = require("./localstrategy");
const conn = require("../DB/db");
const Strategy  = require("passport-local").Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serialize User ", user);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log("deserializeUser id", id);
    let userInfo;
    const sql = "SELECT * FROM user_table where email=?";
    conn.query(sql, id, (err, result) => {
      if (err) {
        console.log("에러야");
      }
      console.log("deserializeUser mysql result : ", result);
      const json = JSON.stringify(result[0]);
      userInfo = JSON.parse(json);
      done(null, userInfo);
    });
  });
  local();
};
