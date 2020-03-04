import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Col, Row, Container, Breadcrumb
 ,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

/**
 * This is implemented using functional components
 */
function RenderMenuItem({ dish, onClick }){

    return(
        
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="30%" src={dish.image} alt="err" />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    {/* <p>{dish.description}</p> */}
                </CardImgOverlay>
            </Link>
        </Card>
    )
    
}

const Menu = (props) => {

    const menu = props.dishes.map( (dish) => {
        return(
            <Col xs="5">
                <RenderMenuItem dish={dish} />
            </Col>
        )       
    });

    return(
        
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </Row>
            <Row>
                {menu}
            </Row>
        </Container>
    );

}

export default Menu;