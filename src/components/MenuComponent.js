import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText,  CardBody, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish : null     
        };
        
    }

    onDishSelect(dish){
        this.setState({ selectedDish:dish });
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
                <div key={dish.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="30%" src={dish.image} alt="err" />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            {/* <p>{dish.description}</p> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }
}

export default Menu;