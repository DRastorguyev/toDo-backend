const { Router, json } = require('express');
const fs = require('fs');

const router = Router();

router.delete('/', (req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;

		console.log(data);

  });
});

module.exports = router;
