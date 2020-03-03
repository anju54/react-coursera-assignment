import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';

/**
 * This is implemented using functional components
 */
function RenderMenuItem({ dish, onClick }){

    return(
        
        <Card onClick={ () => onClick(dish.id) }>
            <CardImg width="30%" src={dish.image} alt="err" />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
                {/* <p>{dish.description}</p> */}
            </CardImgOverlay>
        </Card>
    )
    
}

const Menu = (props) => {

    const menu = props.dishes.map( (dish) => {
        return(
            <Col xs="5">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </Col>
        )       
    });

    return(
        
        <Container>
            <Row>
                {menu}
            </Row>
        </Container>
    );

}

export default Menu;