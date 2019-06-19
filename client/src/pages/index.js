import React, { Component } from 'react'
import Movie from './Movie'

class Index extends Component {
    state = {
        category: 'movie'
    }




render(){
    const { category } = this.state

    switch(category){
        case 'movie':
            return(
                <Movie />
            )
        case 'tv':
            return(
                <h1>tv</h1>
            )
        case 'book':
            return(
                <h1>books</h1>
            )
        case 'game':
            return(
                <h1>games</h1>
            )
        default:
            return(
                <h2>this is the default</h2>
            )
    }
}

}

export default Index