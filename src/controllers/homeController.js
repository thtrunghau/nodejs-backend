const connection = require("../config/database");
const {getAllUsers} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
    let result = await getAllUsers();
    
    return res.render("home.ejs", {listUsers: result})
};
// Sequelize ORM & Prisma & TypeORM
const getA = (req, res) => {
  res.send("more rout yeh");
};

const getSample = (req, res) => {
  res.render("sample.ejs");
};

const getCreate = (req,res) => {
    res.render("create.ejs");
}
const postCreaeUser = async (req, res) =>{
    let {email, name, city} = req.body;
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    console.log("email: ", email, ",name: ",name, ",city: ",city)

    // connection.query(
    //     `INSERT INTO Users  (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err,results){
    //         console.log(results);
    //         res.send("created successfully");
    //     }
    // );
    let [rows, fields] = await connection.query(
        `INSERT INTO Users  (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    )
    // const [rows, files] = await connection.query('select * from Users u')
    console.log(">>>rows: ", rows);
    res.send("created successfully")
}
// const getHome



module.exports = {
  getHomePage,
  getA,
  getSample,
  postCreaeUser,
  getCreate
};
