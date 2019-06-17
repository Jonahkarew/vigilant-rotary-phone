const { Todos } = require('../models')

const getSavedTodos = (req, res) => {
    Todos.find({})
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err)
    })
}

const createTodo = (req, res) => {
    Todos.create(req.body)
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}

module.exports = {
    getSavedTodos,
    createTodo
}