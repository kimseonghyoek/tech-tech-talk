import conn from "../DB/db.js";

export default {
  createUser: (userDto) => {
    const email = userDto.userEmail;
    const name = userDto.userName;
    const pw = userDto.hashed;
    const nickname = userDto.userNickName;
    const phone_num = userDto.userNumber;
    //급한대로 Insert 파라미터 뭉치기(나중에 개선 작업)
    const sqlInsert = {
      email: email,
      name: name,
      pw: pw,
      nickname: nickname,
      phone_num: phone_num
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
                reject(rows.length);
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
                      console.log(result);
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
};
