const conn = require("../DB/db.js");

module.exports = {
  createUser: (userDto) => {
    const email = userDto.userEmail;
    const name = userDto.userName;
    const pw = userDto.hashed;
    const nickname = userDto.userNickName;
    const phone_num = userDto.userNumber;
    console.log(userDto);
    //급한대로 Insert 파라미터 뭉치기(나중에 개선 작업)
    const sqlInsert = {
      email: email,
      name: name,
      pw: pw,
      nickname: nickname,
      phone_num: phone_num,
    };
    return new Promise((resolve, reject) => {
      conn.getConnection((err, con) => {
        if (err) {
          throw err;
        } else {
          con.query(
            `SELECT email FROM user_table where email=?`,
            email,
            (err, rows) => {
              if (err) {
                console.log("Error : ", err);
                reject(err);
              }
              if (rows.length) {
                console.log("회원이 존재합니다.");
                console.log(`---${rows.length}---`);
                console.log(rows);
                reject(rows.length);
                reject(err);
              } else if (rows.length === 0) {
                console.log("회원이 없습니다.");
                con.query(
                  `INSERT INTO user_table SET ?`,
                  sqlInsert,
                  (err, result) => {
                    if (err) {
                      console.log("Error : ", err);
                      reject(err);
                    } else {
                      console.log("가입 완료");
                      resolve(result);
                    }
                    con.release();
                  }
                );
              }
            }
          );
        }
        con.release();
      });
    });
  },

  getAllUser: () => {
    return new Promise((resolve, reject) => {
      conn.getConnection((err, con) => {
        if (err) {
          console.log(err);
        } else {
          const sql = `SELECT nickname FROM user_table`;
          con.query(sql, (err, rows) => {
            if (err) {
              console.log(err);
              reject(err);
            } else if (rows.length === 0) {
              console.log("회원이 없습니다.");
              reject({ msg: "no_user" });
            } else {
              // console.log(rows);
              resolve(rows);
            }
          });
        }
        con.release();
      });
    });
  },

  findUser: (userId) => {
    console.log(userId);
    return new Promise((resolve, rejcet) => {
      conn.getConnection((err, con) => {
        if (err) {
          console.log(err);
          rejcet(err);
        } else {
          const sql = `SELECT id FROM user_table where id=?`;
          con.query(sql, userId, (err, rows) => {
            if (err) {
              console.log(err);
              rejcet(err);
            } else if (rows.length) {
              console.log("id 존재함");
              console.log(rows);
              resolve(rows);
            }
          });
        }
        con.release();
      });
    });
  },

  checkDupEmail: (email) => {
    console.log(email);
    return new Promise((resolve, reject) => {
      conn.getConnection((err, con) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const sql = "SELECT email from user_table where email=?";
          con.query(sql, email, (err, rows) => {
            if (err) {
              console.log(err);
              reject(err);
            } else if (rows.length) {
              console.log("email 중복!");
              console.log(rows);
              resolve(rows);
            }
          });
        }
        con.release();
      });
    });
  },
};
