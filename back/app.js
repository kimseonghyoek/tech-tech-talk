import express from 'express';
import path from 'path';
const app = express();
import cors from 'cors';
import signupRouter from './Router/signupRouter.js';

const PORT = 8000;
const __dirname = path.resolve();

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