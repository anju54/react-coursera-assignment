import React, { Component }from 'react';
import { Navbar, Nav, NavbarBrand, Container, Jumbotron, NavbarToggler, Collapse, NavItem, Col } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){

        super(props);
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <Container>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                            alt="Resto con fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-info fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-home fa-lg"></span> About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <div className="row row-header">
                            <Col sm="12" xs="6">
                                <h1>Resto Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines,
                                    and creates a unique fusion experiance. Our lipsmacking creations will tickle your culinary senses! </p>
                            </Col>
                        </div>
                    </Container>
                </Jumbotron>
            </>
        );
    }
}

export default Header;