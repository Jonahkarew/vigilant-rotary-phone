const mongoose = require('mongoose')


const { Schema } = mongoose;


const todoSchema = new Schema ({
    itemId: {
        type: String
    },
    itemTitle: {
        type: String
    },
    itemType: {
        String
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todos = mongoose.model('todo', todoSchema)

module.exports = Todos