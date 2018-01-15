var express = require('express');
var router = express.Router();
const UserController = require('../controller/user')

/* GET users listing. */
// router.get('/', UserController.getAllUser)
router.post('/', UserController.createUser)
router.post('/login', UserController.login)

module.exports = router;
