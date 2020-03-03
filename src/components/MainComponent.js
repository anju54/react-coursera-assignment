import React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments'
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './homeComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

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

    const HomePage = ()=> {
      return (
        <Home />
      )
    }
    
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>



        {/* <Menu 
          dishes={this.state.dishes} 
          onClick={ (dishId) => this.onDishSelect(dishId) } 
        />
        <DishdetailComponent 
            dish={
              this.state.dishes.filter( (dish) => dish.id===this.state.selectedDish)[0]
            }
            comments={this.state.comments.filter((comment) => comment.dishId === this.state.selectedDish)} /> */}
        <Footer />
      </div>
    );
  }
 
}

export default Main;
