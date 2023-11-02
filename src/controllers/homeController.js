
const getHomePage = (req, res) =>{
    res.send("hello mtk eheheehe")
}

const getA = (req,res) =>{
    res.send("more rout yeh");
}

const getSample = (req, res) =>{
    res.render("sample");
}
module.exports = {
    getHomePage,
    getA,
    getSample
}