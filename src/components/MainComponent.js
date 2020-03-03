import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments'
import DishdetailComponent from './DishdetailComponent';

class Main extends Component {

  constructor(props){

    super(props);

    this.state ={
      dishes : DISHES,
      comments : COMMENTS,
      selectedDish : null  
    };

  }

  onDishSelect(dish){
    this.setState({ selectedDish:dish });
  }

  render(){
    
    return (
      <div>
        <Navbar dark color="Primary">
          <Container>
            <NavbarBrand href="/">Resto Con Fusion</NavbarBrand>
          </Container>
        </Navbar>
        <Menu 
          dishes={this.state.dishes} 
          onClick={ (dishId) => this.onDishSelect(dishId) } 
        />
        <DishdetailComponent 
            dish={
              this.state.dishes.filter( (dish) => dish.id===this.state.selectedDish)[0]
            }
            comments={this.state.comments.filter((comment) => comment.dishId === this.state.selectedDish)} />
      </div>
    );
  }
 
}

export default Main;
