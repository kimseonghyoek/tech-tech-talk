import express from "express";
const router = express.Router();

router.post("/post", (req, res, next) => {
  const data = req.body;
  console.log(data);
  
  res.send("잘받음");
  res.end();
});

export default router;