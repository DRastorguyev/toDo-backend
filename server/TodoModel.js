const fs = require('fs');

class Func {
  
  readTodos() {
    const data = fs.readFileSync('data.txt', 'utf8', (err, data) => {
      if (err) throw err;
    });
    return JSON.parse(data);
  }

  writeTodo(data) {
    fs.writeFile('data.txt', JSON.stringify(data), 'utf8', (err) => {
      if (err) throw err;
    });
  }
}

module.exports = new Func();
