const { Router } = require('express');
const { todo, sequelize } = require('../../models/index.js');
const authMiddlware = require('../../middleware/authMiddlware.js');


const router = Router();

router.get('/todos', authMiddlware, async (req, res) => {
  const { filterBy, order } = req.query;

  const where = {
    user_id: res.locals.user.id
  };

  if (filterBy) where.done = filterBy === 'done' ? true : false;

  const sortedTodos = [['createdAt', order === 'asc' ? 'DESC' : 'ASC']];

  const todos = await todo.findAll({
    where,
    order: sortedTodos,
  });

  if (!todos) {
    return res.status(400).send({
      message: 'Not found',
    });
  }

  res.send(todos);
});

module.exports = router;
