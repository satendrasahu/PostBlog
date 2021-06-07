import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


/**
* @author
* @function Menu
**/

const Menu = (props) => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" style={{ zIndex: 1, backgroundColor: '#6200EE' }}>
                <>

                    <NavLink to="/" className="navbar-brand">
                        <img
                            alt=""
                            src={process.env.PUBLIC_URL+"bgimg.jpg"}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Blog Post</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                           <NavLink className="nav-link" exact activeClassName="text-dark" to="/autherlist">AutherList</NavLink>
                            <NavLink className="nav-link" exact activeClassName="text-dark" to="/allposts">AllPosts</NavLink>-
                           
                        </Nav>

                        <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/login">Login</NavLink>
                        <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/register">Register</NavLink>
                    </Navbar.Collapse>
                </>

            </Navbar>
        </>
    )

}

export default Menu