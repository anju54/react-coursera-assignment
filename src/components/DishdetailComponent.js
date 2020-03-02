import React, {Component} from 'react';
import {Card, CardImg, CardText,  CardBody, CardTitle, Row, Col, Container } from 'reactstrap';

class DishdetailComponent extends Component{

    renderComments(comments) {
        if (comments != null) {
          let options = { year: "numeric", month: "short", day: "numeric" };
          return comments.map(comment => (
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

    render(){

        const {dish}  = this.props;
        console.log(this.props);

        return (
          <Container>
            <Row>
              <Col xs="5">
                <Card>
                  <CardImg top src={dish && dish.image} alt={ dish && dish.name} />
                  <CardBody>
                    <CardTitle>{dish &&  dish.name}</CardTitle>
                    <CardText>{dish &&  dish.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
              {/* <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(dish &&  dish.comments)}
              </div> */}
            </Row>
            </Container>
          );
    }

}

export default DishdetailComponent;