import passport from "passport";
import passportLocal from "passport-local";
import conn from "../DB/db";
import bcrypt from "bcrypt";

const Strategy = passportLocal.Strategy;

const localStrategy = () => {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "pw",
      },
      async (email, password, done) => {
        const match = bcrypt.compare(password, 12);
        try {
          const sql = `SELECT * FROM user_table WHERE email=?`;
          conn.query(sql, email, (err, rows) => {
            if (err) {
              console.log(err);
              done(err);
            }
            if (rows.length === 0) {
              console.log("---no user---");
              done(null, false, {msg: "no_user"});
            } else if (rows) {
              console.log(rows);
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

export default localStrategy;
