import express from 'express';
const router = express.Router();

router.get("/get", (req, res, next) => {
  console.log(req);
});

export default router;