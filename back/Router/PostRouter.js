const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  const user = req.user;
  console.log(user);
  res.send({ msg: user });
});

module.exports = router;