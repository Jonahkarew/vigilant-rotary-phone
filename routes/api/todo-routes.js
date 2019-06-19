const router = require('express').Router()
const { getSavedTodos, createTodo, updateTodo} = require('../../controllers/todo-controller')





router 
    .route('/')
    .get(getSavedTodos)
    .post(createTodo)
    // .put(updateTodo)

router
    .route('/update/')
    .put(updateTodo)

module.exports = router