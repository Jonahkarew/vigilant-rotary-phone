import React, { Component } from 'react'
// import ThemeProvider from '@material-ui/styles/ThemeProvider/ThemeProvider'
import Container from '@material-ui/core/Container'
import MovieList from '../Components/movieList'
import NavBar from '../Components/NavBar/'



export class Movie extends Component {
    render() {
        return (
       
                <React.Fragment>
                    <Container 
                    maxWidth='sm'
                    >
                        <NavBar />
                        <h1>Movies</h1>
                        <MovieList />
                        
                    </Container>
                </React.Fragment>
       
        )
    }
}

export default Movie
