import React, {Component} from 'react';
import DishdetailComponent from './DishdetailComponent';
import {Card, CardImg, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish!=null){
            return <DishdetailComponent dish={dish} />;
        }
        else{
            return (
                <div>

                </div>
            );
        }
    }

    render(){
        const menu = this.props.dishes.map( (dish) => {
            return(
               <Col xs="5">
                <Card onClick={ () => this.props.onClick(dish.id) }>
                    <CardImg width="30%" src={dish.image} alt="err" />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        {/* <p>{dish.description}</p> */}
                    </CardImgOverlay>
                </Card>
                </Col>
            );
        });
        
        return(
            <Container>
                <Row>
                    {menu}
                </Row>
            </Container>
            // <div className="container">
            //     <div className="row">
            //             {menu}
            //     </div>
                
            // </div>
        );
    }
}

export default Menu;