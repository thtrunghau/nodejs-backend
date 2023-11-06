const connection = require("../config/database");
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require("../services/CRUDService");

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

const getUpdatePage = async (req,res) => {
    const userId = req.params.id; //ben web.js khai bao la gi thi ben day dung cho dung ten, id
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit: user});
}

const postCreaeUser = async (req, res) =>{
    let {email, name, city} = req.body;
    
    console.log("email: ", email, ",name: ",name, ",city: ",city)

    let [rows, fields] = await connection.query(
        `INSERT INTO Users  (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    )
    // const [rows, files] = await connection.query('select * from Users u')
    console.log(">>>rows: ", rows);
    res.redirect('/')
}

const postUpdateUser = async (req, res) =>{
    let {email, name, city, userId} = req.body;
    await updateUserById(email, name, city, userId)

    // res.send("Updated successfully")
    res.redirect('/');
}

const postDeleteUser = async (req,res) =>{
    const userId = req.params.id; //ben web.js khai bao la gi thi ben day dung cho dung ten, id
    let user = await getUserById(userId);
    res.render('delete.ejs', {userDelete: user});
}

const postHandleMoveUser = async (req,res) =>{
    const id = req.body.userId;
    
    // let [rows, fileds] = await connection.query(`DELETE FROM Users WHERE id = ? `, [id]);
    await deleteUserById(id); 
    res.redirect('/');
    
    // res.send("Deleted successfully")
}
module.exports = {
  getHomePage,
  getA,
  getSample,
  postCreaeUser,
  getCreate, 
  getUpdatePage, 
  postUpdateUser,
  postDeleteUser, postHandleMoveUser
};
