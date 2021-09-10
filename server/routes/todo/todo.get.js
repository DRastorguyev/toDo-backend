const express = require('express');
const router = express();
const Todo = require('../../model/Todo');

const getTime = (dateStr) => {
  return new Date(dateStr).getTime();
};

module.exports = router.get(
  '/todos',

  async (req, res) => {
    const todos = await Todo.getTodos();

    const { filterType = '', sortDirection = '' } = req.query;

    const sortedAndFilteredTodos = sortAndFilterTodos(
      todos,
      filterType,
      sortDirection
    );

    res.json(sortedAndFilteredTodos);
  }
);

function sortAndFilterTodos(todos, filterType, sortDirection) {
  let filterTodos;

  switch (filterType) {
    case 'DONE':
      filterTodos = todos.filter((todo) => todo.done);
      break;

    case 'UNDONE':
      filterTodos = todos.filter((todo) => !todo.done);
      break;

    default:
      filterTodos = todos;
      break;
  }

  return filterTodos.sort((a, b) => {
    const res = getTime(a.createdAt) - getTime(b.createdAt);
    return sortDirection.toUpperCase() === 'ASC' ? res : -res;
  });
}
