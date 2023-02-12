import express from 'express';
import UserService from '../Service/User.js';
const router = express.Router();

router.get("/get", async (req, res, next) => {
  const userService = new UserService();
  const data = await userService.getAllUser();
  console.log(data);
  res.send(data);
  res.end();
});

export default router;