require('dotenv').config();
const mysql = require('mysql2');
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const path = require('path');
const { config } = require('dotenv');
const app = express();
const port = 3000;
const webRoutes = require("./routes/web");

configViewEngine(app);
app.use("/", webRoutes)

//test mysql
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  database: 'trunghau',
  password: '123456'
});

connection.query(
  'select *from Users u',
  function(err, results, fields) {
    console.log(">>>result = ",results); // results contains rows returned by server
    console.log(">>>fileds = ",fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
