import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import axios from 'axios'

class MovieList extends Component{
    state = {
        todos: []
    }



    componentDidMount()  {
        axios.get('/api/todos/movies').then((response) => {
            this.setState({ todos: response.data})
        })
    }

    handleClick = (event) => {
        console.log(this.state)
    }

    render(){
        return(
            <React.Fragment>
                <List>
                <div>{
                this.state.todos.map(result => {
                    return(
                        <React.Fragment  key={`extraKey-${result._id}`}>
                            
                            <ListItem>
                                
                                <ListItemText
                                primary={result.titleTodo}
                                completed={result.completed}
                                >
                                    
                                </ListItemText>
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    onClick={this.handleClick}
                                    >
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

export default MovieList