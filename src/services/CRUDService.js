const connection = require("../config/database");

const getAllUsers = async () =>{
    let [rows,fields] = await connection.query("select * from Users u");
    return rows;
}

const getUserById = async (userId) => {
    let [rows, fileds] = await connection.query("SELECT *from Users u WHERE id = ?", [userId])
    let user = rows && rows.length > 0 ? rows[0] : {};
    return user;
}

const updateUserById = async (email, name, city, userId) => {
    let [rows, fields] = await connection.query(
        `UPDATE Users set email = ?, name = ?, city = ? WHERE id = ?;`,        
        [email, name, city, userId]
    )
    
}

const deleteUserById = async (id) =>{
    let [rows, fileds] = await connection.query("DELETE FROM Users WHERE id = ?", [id]);
}
module.exports = {
    getAllUsers,
    getUserById, 
    updateUserById, 
    deleteUserById
}