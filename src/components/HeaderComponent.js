import React, { Component }from 'react';
import { Navbar, NavbarBrand, Container, Jumbotron, Comtainer, Col } from 'reactstrap';

class Header extends Component{

    render(){
        return(
            <>
                <Navbar dark>
                    <Container>
                        <NavbarBrand href="/">Resto Con Fusion</NavbarBrand>
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