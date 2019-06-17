const router = require('express').Router()
const { getSavedTodos, createTodo} = require('../../controllers/todo-controller')


router 
    .route('/')
    .get(getSavedTodos)
    .post(createTodo)

module.exports = router