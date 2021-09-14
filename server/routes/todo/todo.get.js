const { deepStrictEqual } = require('assert');
const { Router } = require('express');
const fs = require('fs');

const router = Router();

router.get('/', (req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
		
    res.send(data);
  });
});


module.exports = router;