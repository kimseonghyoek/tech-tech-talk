const express = require('express');
const UserService = require('../Service/User.js');
const router = express.Router();

router.get("/get", async (req, res, next) => {
  const userService = new UserService();
  const data = await userService.getAllUser();
  console.log(req);
  res.send(data);
  res.end();
});

module.exports = router;