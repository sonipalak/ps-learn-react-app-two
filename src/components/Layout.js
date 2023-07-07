import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './_shared/Header'
import Container from 'react-bootstrap/Container';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Outlet />
                </Container>
            </div>
        )
    }
}
