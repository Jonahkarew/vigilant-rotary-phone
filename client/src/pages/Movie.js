import React, { Component } from 'react'
// import ThemeProvider from '@material-ui/styles/ThemeProvider/ThemeProvider'
import Container from '@material-ui/core/Container'
import TodoList from '../Components/List'



export class Movie extends Component {
    render() {
        return (
       
                <React.Fragment>
                    <Container 
                    maxWidth='sm'
                    >
                        <h1>Movies</h1>
                        <TodoList />
                        
                    </Container>
                </React.Fragment>
       
        )
    }
}

export default Movie
