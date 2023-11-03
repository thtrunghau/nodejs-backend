const connection = require("../config/database");

const getHomePage = (req, res) => {
  
    return res.render("home.ejs")
};
// Sequelize ORM & Prisma & TypeORM
const getA = (req, res) => {
  res.send("more rout yeh");
};

const getSample = (req, res) => {
  res.render("sample");
};

const postCreaeUser = (req, res) =>{
    res.send('create a new user')
    console.log(">>>req.body",req.body)
}
// const getHome
module.exports = {
  getHomePage,
  getA,
  getSample,
  postCreaeUser
};
