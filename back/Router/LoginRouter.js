import express from "express";
import passport from "passport";
const router = express.Router();

router.post("/post", async(req, res, next) => {
  console.log(`=${req.body.data.userEmail}=`);
  const data = {
    userEmail,
    userPw
  } = req.body.data;
  console.log(data);
  passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login",
  });
  res.send({msg: "login"});
  res.end();
})

export default router;