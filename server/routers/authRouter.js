const controller = require('./authContoller')
const { Router } = require('express');
const router = Router();

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);


module.exports = router;