import React from 'react';
import {Card, CardImg, CardText,  CardBody, CardTitle, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

/**
 * This is implemented using functional components
 */
function RenderDish({dish}){

  console.log(dish);
    
  return (
    <Col xs="5">
      <Card>
        <CardImg top src={dish && dish.image} alt={ dish && dish.name} />
        <CardBody>
          <CardTitle>{dish &&  dish.name}</CardTitle>
          <CardText>{dish &&  dish.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );

}

function RenderComments({comments}) {

  if (comments != null) {
    let options = { year: "numeric", month: "short", day: "numeric" };
    return  comments.map(comment => (
      <ul key={comment.id} className="list-unstyled">
        <li className="mb-2">{comment.comment}</li>
        <li>
          -- {comment.author}{" "}
          {new Date(comment.date).toLocaleDateString("en-US", options)}
        </li>
      </ul>
    ));
  } else return <div />;
}

const DishdetailComponent = (props) =>{

  return (
    <Container>
      <Row>
        <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>
      </Row>
      <Row>
        <RenderDish dish={props.dish} />
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <RenderComments comments={props.comments} />
        </div>
      </Row>
    </Container>
  );

}
export default DishdetailComponent;