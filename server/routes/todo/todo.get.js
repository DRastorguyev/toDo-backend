const { Router } = require('express');
const { user } = require('../../models/index.js').sequelize.models;

const router = Router();

router.get('/todos', async (req, res) => {

  const users = await user.findAll();

  if (!users) {
    return res.status(400).send({
      message: 'Not found',
    });
  }

  res.send(users);
});

module.exports = router;
