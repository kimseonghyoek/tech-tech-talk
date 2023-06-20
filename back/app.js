const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const signupRouter = require("./Router/signupRouter");
const loginRouter = require("./Router/LoginRouter");
const manageRouter = require("./Router/manageRouter");
const userRouter = require("./Router/userRouter");
const writeRouter = require("./Router/WriteRouter");
const commRouter = require("./Router/CommRouter");
const passportConfig = require("./passport/index");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = 8000;

app.set("view engine", "html");
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ credentials: true, origin: "localhost:3000" }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, "../front/build")));
passportConfig();
app.use(
  expressSession({
    secret: process.env.COOKIE_SECRET,
    name: "Cookie!",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use("/comm", commRouter);
app.use("/write", writeRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`####### server works on localhost:${PORT} #######`);
});
