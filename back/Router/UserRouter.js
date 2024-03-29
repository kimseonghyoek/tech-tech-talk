const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserService = require("../Service/User");
const passport = require("passport");

// user 로그인 여부 확인
router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      console.log(req.user);
      const userService = new UserService();
      userService.getUser(req.user);
      return res.send({ msg: req.user });
    }
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
    res.json();
  } catch (err) {
    console.error(err);
    next(err);
  };
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
router.post("/logout", isLoggedIn, (req, res, next) => {
  try {
    req.logout((err) => {
      if (err) {
        {
          return next(err);
        }
      }
      res.send({ msg: "logout" });
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 이메일 중복 확인
router.post("/dupemail", async(req, res, next) => {
  try {
    const userEmail = req.body.data;
    const userService = new UserService();
    const checkEamil = await userService.checkEmail(userEmail);
    if (checkEamil.length > 0) {
      console.log('이메일이 존재합니다.');
      res.send({msg: 1});
    } else if (checkEamil.length === 0) {
      console.log('이메일이 존재하지 않습니다.');
      res.send({msg: 0});
    }
    // req로 email 받아서 로직 처리
  } catch(err) {
    console.log(err);
    next(err);
  }
})

module.exports = router;
