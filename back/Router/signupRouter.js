const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserService = require("../Service/User.js");
const userService = new UserService();

router.post("/post", async (req, res, next) => {  
  const { userName, userEmail, userPw, userNickName, userNumber } = req.body.data;
  const salt = 12;
  const hashed = await bcrypt.hash(userPw, salt);
  const userDto = {
    userEmail, userName, hashed, userNickName, userNumber
  }
  userService.Signup(userDto);

  res.send({ msg: "success_signup" });
  res.end();
  next();
});

module.exports = router;