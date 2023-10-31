const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("sample");
});

// console.log(process.env)

router.get("/a", (req, res) => {
  res.send("more rout yeh");
});

module.exports = router;