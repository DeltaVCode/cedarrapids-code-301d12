import React, { Component } from 'react'
import {Button, Container, ListGroup} from 'react-bootstrap';


 class Cats extends Component {
  render() {
    console.log('Cat props form App.js',this.props.cats);

    let cats = this.props.cats.map(cat => (
        <Cat cat={cat} key={cat._id} deleteCats={this.props.deleteCats} />
      // <ListGroup.Item key={cat._id}>{cat.name} is {cat.color}</ListGroup.Item>

    ));
  
    return (
    <Container>
      <ListGroup>
          {cats}
      </ListGroup>
    </Container>
     
    )
  }
}
export default Cats;


class Cat extends Component{
  
  render(){
    console.log('what can we use in here to delete !!!!!',this.props.cat);
    return(
      <>
      <ListGroup.Item key={this.props.cat._id}>
      {this.props.cat.name} is {this.props.cat.color} 
      <Button variant="success" onClick={() => this.props.deleteCats(this.props.cat._id)}>Delete</Button>
      </ListGroup.Item>
      </>
    )
  }
}