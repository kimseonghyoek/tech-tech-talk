const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const signupRouter = require("./Router/signupRouter");
const loginRouter = require("./Router/loginRouter");
const manageRouter = require("./Router/manageRouter");
const passportConfig = require("./passport/index");
const passport = require("passport");
const expressSession = require("express-session");
require("dotenv").config();
const PORT = 8000;

passportConfig();
app.set("view engine", "html");
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.static(path.join(__dirname, "../front/build")));
app.use(
  expressSession({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/user", manageRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`####### server works on port : ${PORT} #######`);
});
