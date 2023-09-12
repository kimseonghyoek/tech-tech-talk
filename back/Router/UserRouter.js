const express = require("express");
const { isLoggedIn } = require("./middlewares");
const router = express.Router();

// user 로그인 여부 확인
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 해당 id user 정보 가져오기
router.get("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 회원가입
router.post("/signup", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 로그인
router.post("/login", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 유저 정보 수정
router.patch("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
