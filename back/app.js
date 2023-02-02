const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const signupRouter = require('./Router/signupRouter');

const PORT = 8000;
app.set("view engine", "html");
app.use(express.json());
app.use(express.static(path.join(__dirname, "../front/build")));
app.use(cors({ credentials: true, origin: "http://localhost:3000"}))

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.use("/signup", signupRouter);

app.listen(PORT, () => {
  console.log("server works on port : ", + PORT);
});