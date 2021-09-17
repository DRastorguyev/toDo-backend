const { Router } = require('express');
const { user } = require('../../models/index.js').sequelize.models;

const router = Router();

router.patch('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { editedName } = req.body;
  const { condition } = req.body;

  try {
    const updated = await user.update(
      { name: editedName, done: condition },
      { where: { id: id } }
    );
    res.send(updated);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
