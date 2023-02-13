import passport from "passport";
import localStrategy from "./localstrategy";

const index = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
    localStrategy();
  });
  
}

export default index;