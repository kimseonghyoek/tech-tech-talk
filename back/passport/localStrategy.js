import passport from "passport";
import passportLocal from "passport-local";
import conn from "../DB/db";
import bcrypt from "bcrypt";

const LocalStrategy = passportLocal.Strategy;

const localStrategy = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pw',
  }, async (email, password, done) => {
    const match = await bcrypt.compare(password, 12);
    try {
      await conn.query(`SELECT * FROM user_table WHERE email=?`, email, (err, rows) => {
        if (err) {
          console.log(err);
          throw err;
        } else if (rows.length === 0) {
          console.log("유저가 없음");
          return done(null, false, {message: "no_user"});
        } else {
          conn.query(`SELECT pw FROM user_table WHERE email=?`, email, (err, result) => {
            if (err) {
              console.log(err);
              throw err;
            } else {
              done(null, false, result);
            }
          })
        }
      })
    } catch (err) {
      console.log(err);
      throw err;
    }
  }))
}