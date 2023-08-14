const posts = require("../Model/Post");

module.exports = class PostService {
  async RegisterPost(post) {
    const posted = await posts.createPost(post);
    return { post: posted };
  };
};