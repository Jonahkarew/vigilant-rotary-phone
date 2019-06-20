import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export class NavBar extends Component {

    navigateCreate= (event) => {
        event.preventDefault()
        this.setstate={category: 'create'}
    }




    render() {
        return (
            
            <div>
                <Button variant="contained" 
                        color="primary"
                        onClick={this.navigateCreate}>
                            Create Todo</Button>

                <Button variant="contained" 
                        color="primary">
                            Movies</Button>

                <Button variant="contained" 
                        color="primary">
                            Tv
                </Button>

                <Button variant="contained" 
                        color="primary">
                            Games
                </Button>

                <Button variant="contained" 
                        color="primary">
                            Books
                </Button>    
            </div>
        
        )
    }
}

export default NavBar
