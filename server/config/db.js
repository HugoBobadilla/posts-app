const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'hugo',
  password: 'Temporal2022**',
  database: 'postsApp'
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;