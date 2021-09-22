const authMiddlware = require('../middleware/authMiddlware.js');
const controller = require('./authContoller');
const { Router } = require('express');
const router = Router();

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/auth', authMiddlware, controller.check);

module.exports = router;
