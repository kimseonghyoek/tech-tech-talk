const passport = require("passport");
const local = require("./localstrategy");
const conn = require("../DB/db");
const Strategy  = require("passport-local").Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serialize User ", user[0].id);
    done(null, user[0].id);
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
      console.log(result[0].id);
      const json = JSON.stringify(result[0]);
      userInfo = JSON.parse(json);
      done(null, userInfo.id);
    });
  });
  
  local();
};
