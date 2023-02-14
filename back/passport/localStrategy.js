const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const conn = require("../DB/db");
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "pw",
      },
      async (email, password, done) => {
        console.log(`===${password}===`)
        const salt = 12
        const hash = bcrypt.hash(password, salt);
        try {
          const sql = `SELECT * FROM user_table WHERE email=?`;
          conn.query(sql, email, (err, rows) => {
            if (err) {
              console.log(err);
              done(err);
            }
            if (rows.length === 0) {
              console.log("---no user---");
              done(null, false, { msg: "no_user" });
            } else if (rows) {
              console.log(rows);
              const sql = `SELECT pw FROM user_table where email=?`;
              conn.query(sql, email, (err, rows) => {
                if (err) {
                  console.log(err);
                }
                if (rows.length === 0) {
                  console.log(rows);
                  done(null, false, { msg: "not_match_pw" });
                } else if (rows) {
                  console.log(rows)
                  done(null, rows);
                }
              });
            }
          });
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
    )
  );
};
