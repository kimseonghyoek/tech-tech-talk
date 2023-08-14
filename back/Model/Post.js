module.exports = {
  createPost: (postDto) => {
    console.log("createPost 함수 탐");
    const title = postDto.title;
    const value = postDto.value;
    const cate = postDto.category;
    const tags = postDto.tags;
    console.log(tags);
  }
}