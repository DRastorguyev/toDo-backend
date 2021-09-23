const { Router } = require('express');
const { todo } = require('../../models/index.js').sequelize.models;
const authMiddlware = require('../../middleware/authMiddlware.js');

const router = Router();

router.delete('/todo/:id', authMiddlware, (req, res) => {
  const { id } = req.params;

  try {

    const deletedTodo = todo.destroy({
      where: {
        id,
        user_id: res.locals.user.id,
      },
    });

  } catch (e) {
    console.error(e);
  }
  
  res.status(204).json();
});

module.exports = router;
