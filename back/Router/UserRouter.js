const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserService = require("../Service/User");
const passport = require("passport");

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
    const { userName, userEmail, userPw, userNickName, userNumber } =
      req.body.data;
    const salt = 12;
    const hashed = await bcrypt.hash(userPw, salt);
    const userObject = {
      userName,
      userEmail,
      hashed,
      userNickName,
      userNumber,
    };
    const userService = new UserService();
    await userService.Signup(userObject);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 로그인
router.post("/login", isNotLoggedIn, async (req, res, next) => {
  passport.authenticate("local", { session: true }, (err, user, info) => {
    if (err) {
      console.error(err);
      next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    if (user) {
      req.login(user, async (loginErr) => {
        if (loginErr) {
          console.log(loginErr);
          return next(loginErr);
        } else {
          const data = {
            email: req.user[0].email,
            nickname: req.user[0].nickname,
          };
          console.log(data);
          return res.send(data).end();
        }
      });
    }
  })(req, res, next);
});

// 유저 정보 수정
router.patch("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 회원 탈퇴
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 로그아웃
router.post("/logout", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
