import passport from "passport";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

const index = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  
}