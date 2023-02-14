const mysql = require("mysql2");

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sad123',
  port: 3308,
  database: 'tech',
});

module.exports = conn;