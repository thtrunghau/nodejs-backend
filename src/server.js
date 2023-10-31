const express = require("express");
require('dotenv').config();
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render("sample")
});

// console.log(process.env)

app.get("/a", (req, res) => {
    res.send("more rout yeh");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
