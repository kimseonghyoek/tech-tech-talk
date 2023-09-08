const { resolve } = require("path");
const conn = require("../DB/db");

module.exports = {
  createPost: (postDto, id) => {
    console.log("createPost 함수 탐");
    const title = postDto.title;
    const value = postDto.value;
    const cate = postDto.category;
    const tags = postDto.tags;

    return new Promise((resolve, reject) => {
      conn.getConnection((err, con) => {
        if (err) {
          throw err;
        } else {
          const user_id = id;

          con.query(
            `INSERT INTO post_table (title, text, cate, hash) VALUES ?,?,?,?`,
            title, value, cate, tags,
            (err, register) => {
              if (err) {
                console.log("Register Post Error : ", err);
                reject();
              };
              if (register) {
                console.log("게시물 등록 완료..?");
                resolve(register);
              }
            }
          )
        }
        con.release();
      });
    })
  }
}