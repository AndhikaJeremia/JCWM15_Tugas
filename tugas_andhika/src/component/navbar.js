import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Dropdown

} from 'react-bootstrap'

// import link
import { Link } from 'react-router-dom'
import {
    connect
} from 'react-redux'

import {
    logout
} from '../action'

class Navigation extends React.Component {
    btnLogout = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to='/'>
                        React-Bootstrap
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to='/LinkPage'>Link Page</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/Carousel'>Carousel</Link>
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to='/TodoList'>
                                    Todo List
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/NewsAPIid'>
                                    News API
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Dropdown style={{ marginRight: '50px' }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.props.username ? this.props.username : 'Username'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.props.username
                                ?
                                <Dropdown.Item onClick={this.btnLogout}>Log Out</Dropdown.Item>
                                :
                                <>
                                    <Dropdown.Item as={Link} to='/Login'>Login</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/Register'>Register</Dropdown.Item>
                                </>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, {logout})(Navigation)