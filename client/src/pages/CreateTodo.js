import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import SubmitForm from '../Components/SubmitForm'


export class Create extends Component {
    render() {
        return (
            <div>
                <Container maxWidth="md">
                <SubmitForm />
                </Container>
            </div>
        )
    }
}

export default Create
