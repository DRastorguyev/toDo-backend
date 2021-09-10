const fs = require('fs');

class Todo {
  async saveTodos(data) {
    try {
      await fs.promises.writeFile('data.txt', JSON.stringify(data), 'utf8');
    } catch (e) {
      console.log(e);
    }
  }

  async getTodos() {
    try {
      const data =  await fs.promises.readFile('data.txt', 'utf8');
      const jsonData = await JSON.parse(data);
      if (Array.isArray(jsonData)) return jsonData;
    } catch (e) {
      console.log(e);
    }
    return [];
  }
}

module.exports = new Todo();
