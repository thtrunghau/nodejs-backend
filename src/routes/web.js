const express = require("express");
const router = express.Router();
const {getHomePage, getA, getSample, postCreaeUser} = require("../controllers/homeController");

router.get('/a', getA)
router.get('/sample', getSample)
router.get('/', getHomePage)

router.post('/create-user',postCreaeUser);

module.exports = router;