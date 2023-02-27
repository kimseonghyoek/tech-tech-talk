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
      (email, password, done) => {
        try {
          const sql = `SELECT * FROM user_table WHERE email=?`;
          conn.query(sql, email, (err, rows) => {
            if (err) {
              console.log(err);
              return done(err);
            }
            if (rows.length === 0) {
              console.log("no_user");
              return done(null, false, { message: "no_user" });
            } else if (rows) {
              const sql = `SELECT pw FROM user_table where email=?`;
              conn.query(sql, email, (err, rows) => {
                if (err) {
                  console.log(err);
                  return done(err);
                }
                if (rows) {
                  console.log(rows);
                  const pw = rows[0].pw;
                  const match = bcrypt.compareSync(password, pw);
                  if (match) {
                    return done(null, email);
                  } else {
                    return done(null, false, { message: "not_match_pw" });
                  }
                } else if (rows.length === 0) {
                  return done(null, false, { message: "no_user" });
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
