const mysql = require("mysql2");

const info = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sad123',
  port: 3308,
  database: 'tech',
});

const conn = (callback) => {
  info.getConnection((err, conn) => {
    if(!err) {
      console.log("연결 성공");
    } else if(err) {
      console.log("연결 실패");
    }
  });
}

module.exports = conn;