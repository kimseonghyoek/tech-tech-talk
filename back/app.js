const express = require('express');
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("create server");
});

app.listen(PORT);