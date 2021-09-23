const authMiddlware = require('../middleware/authMiddlware.js');
const {registration, login, check} = require('./authContoller');
const { Router } = require('express');
const router = Router();

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', authMiddlware, check);

module.exports = router;