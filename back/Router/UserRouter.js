const express = require('express');
const router = express.Router();

router.get("/user", (req, res, next) => {
  console.log("===== user router =====")
});

module.exports = router;