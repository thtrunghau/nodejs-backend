const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("select *from Users u", function (err, results, fields) {
    users = results;
    console.log(">>>result homepage = ", results); // results contains rows returned by server
    //console.log(">>>fileds = ",fields); // fields contains extra meta data about results, if available
    console.log(">>>check result", users);
    res.send(JSON.stringify(users));
  });
};
// Sequelize ORM & Prisma & TypeORM
const getA = (req, res) => {
  res.send("more rout yeh");
};

const getSample = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomePage,
  getA,
  getSample,
};
