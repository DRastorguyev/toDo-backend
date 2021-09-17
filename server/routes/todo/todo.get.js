const { Router } = require('express');
const user = require('../../models/user');

const router = Router();

router.get('/todos', async (req, res) => {
  const { id } = req.params;

  const user = await user.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(404).send({
      message: `No user found with id ${id}`,
    });
  }
  return res.send(user)
});

module.exports = router;
