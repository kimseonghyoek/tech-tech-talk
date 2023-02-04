import mysql from "mysql2";

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sad123',
  port: 3308,
  database: 'tech',
});

export default conn;