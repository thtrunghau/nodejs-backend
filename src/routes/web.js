const express = require("express");
const router = express.Router();
const {getHomePage, getA, getSample} = require("../controllers/homeController");

router.get('/a', getA)
router.get('/sample', getSample)
router.get('/', getHomePage)

module.exports = router;