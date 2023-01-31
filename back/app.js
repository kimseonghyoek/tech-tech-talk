const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const PORT = 8000;

app.use(express.static(path.join(__dirname, "../front/build")));

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "../../front/build/index.html"));
});

app.listen(PORT, () => {
  console.log("server works on port : ", + PORT);
});