const express = require('express');
const { isLoggedIn } = require('./middlewares');
const router = express.Router();
const PostService = require('../Service/Post');
const postService = new PostService();

router.post("/", isLoggedIn, (req, res) => {
  console.log(req.body);
  const { category, title, value, tags } = req.body.data;
  const postDto = {
    category, title, value, tags
  };
  postService.RegisterPost(postDto, req.user);  
});

module.exports = router;