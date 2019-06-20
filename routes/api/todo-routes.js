const router = require('express').Router()
const { getSavedTodos,
        createTodo, 
        updateTodo,
        getMovies,
        getGames,
        getTv,
        getBooks} = require('../../controllers/todo-controller')





router 
    .route('/')
    .get(getSavedTodos)
    .post(createTodo)
    // .put(updateTodo)

router
    .route('/movies')
    .get(getMovies)

router 
    .route('/games')
    .get(getGames)

router
    .route('/tv')
    .get(getTv)

router
    .route('/books')
    .get(getBooks)

router
    .route('/update/')
    .put(updateTodo)

module.exports = router