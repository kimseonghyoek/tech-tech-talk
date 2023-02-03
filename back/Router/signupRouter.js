const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/post", async (req, res) => {  
  const data = req.body.data;
  const salt = 12;
  const hashed = await bcrypt.hash(data.userPw, salt);
  console.log(hashed);
  res.send("잘받음");
});

module.exports = router;