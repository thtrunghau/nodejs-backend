const express = require("express");
const router = express.Router();
const {getHomePage, getA, getSample, postCreaeUser, getCreate} = require("../controllers/homeController");

router.get('/a', getA)
router.get('/sample', getSample)
router.get('/', getHomePage)
router.get('/create', getCreate)
router.post('/create-user',postCreaeUser);

module.exports = router;