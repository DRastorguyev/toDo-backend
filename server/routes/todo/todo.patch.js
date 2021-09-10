const Todo = require('../../model/Todo')
const express = require('express');
const router = express();


module.exports = router.patch(
	'/todo/:id',
	
	async (req, res, next) => {

			let todos = await Todo.getTodos()

			const {id} = req.params
			if (!todos.some(todo => todo.uuid === id)) return next(ApiError.unprocessableEntity('tod\'s id not find'))

			const editData = {};

			['name', 'done']
					.forEach(propertyName => {
							if (req.body.hasOwnProperty(propertyName)) editData[propertyName] = req.body[propertyName]
					});

			const editTodoIndex = todos.findIndex(todo => todo.uuid === id)
			todos[editTodoIndex] = {...todos[editTodoIndex], ...editData}
			await Todo.saveTodos(todos)

			res.json(todos[editTodoIndex])
	}
)