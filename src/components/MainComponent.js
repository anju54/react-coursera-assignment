import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent';

class Main extends Component {

  constructor(props){

    super(props);

    this.state ={
      dishes : DISHES,
      selectedDish : null  
    };

  }

  onDishSelect(dish){
    this.setState({ selectedDish:dish });
  }

  render(){
    return (
      <div>
        <Navbar dark color="Primary" id="mainNavBar">
          <div className="container">
            <NavbarBrand href="/">Resto Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu 
        dishes={this.state.dishes} 
        onClick={ (dishId) => this.onDishSelect(dishId) } 
        />
        <DishdetailComponent 
            dish={this.state.dishes.filter( (dish) => dish.id===this.state.selectedDish)[0] } />
      </div>
    );
  }
 
}

export default Main;
