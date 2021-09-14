const fs = require('fs');

class Func {
  readTodos = () => {
    const data = fs.readFile('data.txt', 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  };

  writeTodo = (data) => {
    fs.writeFile('data.txt', JSON.stringify(data), 'utf8');
  };
}

module.exports = new Func();
