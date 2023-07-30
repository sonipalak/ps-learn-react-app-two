import React from "react";
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

const MovieLayout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}
export default MovieLayout;