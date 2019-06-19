import axios from 'axios'

export const getSavedTodos = () => {
    return axios.get('/')
};

export const createTodo = todoData => {
    return axios.post('/', todoData)
};

export const updateTodo = todoData => {
    return axios.put('/update/', todoData)
}