const posts = require("../Model/Post");

module.exports = class PostService {
  async RegisterPost(post, id) {
    const posted = await posts.createPost(post, id);
    return { post: posted };
  };
};