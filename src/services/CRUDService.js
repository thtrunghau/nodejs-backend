const connection = require("../config/database");
const getAllUsers = async () =>{
    let [rows,fields] = await connection.query("select * from Users u");
    return rows;
}

module.exports = {
    getAllUsers
}