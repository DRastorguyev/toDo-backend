const fs = require('fs');

const readTodos = () => {
  const data = fs.readFileSync('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
  });
  return JSON.parse(data);
};

const writeTodo = (data) => {
  fs.writeFile('data.txt', JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports = { readTodos, writeTodo };