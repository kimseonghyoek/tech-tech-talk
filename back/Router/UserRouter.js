const express = require('express');
const router = express.Router();

router.get("/get", (req, res, next) => {
  console.log("===== user router =====")
});

module.exports = router;