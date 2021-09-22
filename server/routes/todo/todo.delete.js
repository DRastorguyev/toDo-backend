const { Router } = require('express');
const { todo } = require('../../models/index.js').sequelize.models;
  const authMiddlware = require('../../middleware/authMiddlware.js');

const router = Router();

router.delete('/todo/:id', authMiddlware, (req, res) => {
  const { id } = req.params;

  const deletedTodo = todo.destroy({
    where: {
      id,
    },
  });

  if (!deletedTodo) {
    return res.status(404).send({
      message: 'id not defined',
    });
  }

  res.send(deletedTodo);
});

module.exports = router;
