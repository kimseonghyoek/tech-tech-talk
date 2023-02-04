import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import UserService from "../Service/User.js";
const userService = new UserService();

router.post("/post", async (req, res, next) => {  
  const { userName, userEmail, userPw } = req.body.data;
  const salt = 12;
  const hashed = await bcrypt.hash(userPw, salt);
  const userDto = {
    userEmail, userName, hashed
  }
  userService.Signup(userDto);

  res.send({ msg: "success_signup" });
  res.end();
});

export default router;