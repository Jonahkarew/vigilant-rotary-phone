import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import axios from 'axios'

class TodoList extends Component{
    state = {
        todos: []
    }



    componentDidMount()  {
        axios.get('/api/todos').then((response) => {
            this.setState({ todos: response.data})
        })
    }

    render(){
        return(
            <React.Fragment>
                <List>
                <div>{
                this.state.todos.map(result => {
                    return(
                        <React.Fragment key={`extraKey-${result._id}`}
                                        >
                            <ListItem>
                                <ListItemText
                                primary={result.titleTodo}
                                >
                                    
                                </ListItemText>
                                <Button 
                                    variant="contained" color="primary">
                                    Complete
                                </Button>
                            </ListItem>
                                <br />
                        </React.Fragment>
                    )
                })
                }</div>
                </List>
            </React.Fragment>
        )
    }
}

export default TodoList