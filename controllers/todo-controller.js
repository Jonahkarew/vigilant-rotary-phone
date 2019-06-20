const { Todos } = require('../models')


// route or retrieving todos
const getSavedTodos = (req, res) => {
    Todos.find({})
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err)
    })
}

//get movies
const getMovies = (req, res) => {
    Todos.find({"typeTodo": "movie"})
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err)
    })
}

// get games
const getGames = (req, res) => {
    Todos.find({"typeTodo": "game"})
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err)
    })
}

// get tv
const getTv = (req, res) => {
    Todos.find({"typeTodo": "tv"})
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err)
    })
}

// get books
const getBooks = (req, res) => {
    Todos.find({"typeTodo": "book"})
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err)
    })
}

// route for creating todos

const createTodo = (req, res) => {
    Todos.create(req.body)
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}


// route for updating list items

const updateTodo = async(req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "requested content is empty"
        })
    }
    Todos.findByIdAndUpdate(req.body._id, {
        titleTodo: req.body.titleTodo,
        typeTodo: req.body.typeTodo,
        completed: req.body.completed

    }, 
    {new: true})
    .then(dbData => {
        if(!dbData){
            return res.status(404).send({
                message: "item not found with matching id"
            })
        }
      res.send(dbData)
    }).catch(err => {
        if(err) console.log(err)
    })
}


module.exports = {
    getSavedTodos,
    createTodo,
    updateTodo,
    getMovies,
    getGames,
    getTv,
    getBooks
}