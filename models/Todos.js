const mongoose = require('mongoose')


const { Schema } = mongoose;


const todoSchema = new Schema ({
    titleTodo: {
        type: String,
        default: "title"
    },
    typeTodo: {
        type: String,
        default: "type"
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Todos = mongoose.model('todo', todoSchema)

module.exports = Todos