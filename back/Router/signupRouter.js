const express = require("express");
const router = express.Router();

router.post("/post", async (req, res) => {  
  console.log(req.body);
});

module.exports = router;