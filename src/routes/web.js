const express = require("express");
const router = express.Router();
const {getHomePage, getA, getSample, postCreaeUser, getCreate, getUpdatePage, postUpdateUser, postDeleteUser, postHandleMoveUser} = require("../controllers/homeController");

router.get('/a', getA)
router.get('/sample', getSample)
router.get('/', getHomePage)


router.get('/create', getCreate)
router.get('/update/:id', getUpdatePage)

router.post('/create-user',postCreaeUser);
router.post('/update-user',postUpdateUser);
router.post('/delete-user/:id',postDeleteUser);
router.post('/delete-user',postHandleMoveUser);

module.exports = router;