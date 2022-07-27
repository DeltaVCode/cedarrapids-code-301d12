import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

class Pizza extends React.Component {
 //create constructor function
 constructor(props){
  super(props);
  this.state = {
    likes: 0,
    pizzaNeed: false
  };
}


  handleLikes = () => {
    console.log('we here!');
    this.setState({
      likes: this.state.likes + 1,
    });
  }
  pizzaNeeded = () => {
    this.setState({
      pizzaNeed: true
    });
  }

  pizzaGot = () => {
    this.setState({
      pizzaNeed: false
    });
  }


  helperFunctionH3Click = () => {
    // this.props.handleOnShowModal('Bob');
    this.props.handleOnShowModal(this.props.pizzaName)

  };

  render() {
    return (
<>
   <Col className="mt-4">
      <Card className="h-100 p-3" >
        <Card.Title onClick={this.helperFunctionH3Click} >{this.props.pizzaName}</Card.Title>
        <Card.Img  
          src={this.props.image_URL}
              alt={this.props.pizzaName}
              onClick={this.props.addPizza}
        />
            <p>{this.state.likes} Likes!</p>
            <p onClick={this.handleLikes}>Click to Like this Pizza?</p>
            <div>{this.state.pizzaNeed ? 'I need Pizza' : ''}</div>
            <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
            <Button variant="success" onClick={this.pizzaGot}>I got some Pizza!</Button>
      </Card>
      </Col>
           
        </>
    )
  }
}

export default Pizza;
