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
    updateTodo
}