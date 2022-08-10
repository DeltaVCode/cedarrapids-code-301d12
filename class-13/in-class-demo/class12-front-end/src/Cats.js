import React, { Component } from 'react'
import {Button, Container, ListGroup} from 'react-bootstrap';
import UpdateCatForm from './UpdateCatForm.js';

 class Cats extends Component {
  
  render() {
    console.log('Cat props from App.js',this.props.cats);

    let cats = this.props.cats.map(cat => (
        <Cat 
          cat={cat}
          key={cat._id}
          deleteCats={this.props.deleteCats}  
          updateCats={this.props.updateCats}
        />
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
  
  constructor(props){
    super(props);
    this.state = {
      showUpdateForm: false,
    };
  }

  render(){
    console.log('what can we use in here to delete !!!!!',this.props.cat);
    return(
      <>
      <ListGroup.Item key={this.props.cat._id}>
      {this.props.cat.name} is {this.props.cat.color} 

      <Button 
        variant="info"
        onClick={() => this.setState({showUpdateForm: true})}
        >Update</Button>


      <Button variant="success" onClick={() => this.props.deleteCats(this.props.cat._id)}>Delete</Button>
      </ListGroup.Item>

      {
        this.state.showUpdateForm &&
        <UpdateCatForm 
        cat={this.props.cat}  
        updateCats={this.props.updateCats}
        />
      }



      </>
    )
  }
}