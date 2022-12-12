import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'

const Header = () => {
     //const navigate = useNavigate()
    
    return (
        <>
            <Navbar bg="light" varient="light">
                <Container>
                <img src="/logo.png" alt="error" width="60" height="60"/>
                 <NavLink to="/login" className="text-decoration-none text-dark mx-2"></NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-dark mx-2"></NavLink>

                        <NavLink to="/details" className="text-decoration-none text-dark"></NavLink>
                    </Nav>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Header