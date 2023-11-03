require('dotenv').config();
const mysql = require('mysql2');
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const path = require('path');
const { config } = require('dotenv');
const app = express();
const port = process.env.PORT || 8080;
const webRoutes = require("./routes/web");
const connection = require('./config/database')

configViewEngine(app);
app.use("/", webRoutes)

//test mysql


// connection.query(
//   'select *from Users u',
//   function(err, results, fields) {
//     // users = results;
//     console.log(">>>result = ",results); // results contains rows returned by server
//     //console.log(">>>fileds = ",fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
