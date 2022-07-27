import React from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';



class App extends React.Component{

  //create constructor function
  constructor(props){
    super(props);
    //how do we pass state to another component? through props 
    this.state = {
      pizza: '',
      //add modal
      showModal: false,
      selectPizza: ''
    };
  }
  
  addPizza = () => {
    //everytime a click event happens I want to add more hearts
    this.setState({
     pizza: this.state.pizza + '🍕'
    });
  }
  
  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  }

  handleOnShowModal = (name) => {
    this.setState({
      showModal: true,
      selectPizza: name
    })
  }





render() {
  console.log('we got data?',data);
  return (
    <>
      <Header pizzas={this.state.pizza}/>
      <Main
       addPizza={this.addPizza}
       data={data}
       handleOnShowModal={this.handleOnShowModal}

       />
      <footer>DeltaV, 2022</footer>



    <Modal show={this.state.showModal} onHide={this.handleOnHide}>
       <Modal.Header closeButton>
          <Modal.Title>{this.state.selectPizza}</Modal.Title>
        </Modal.Header>
    </Modal>
     
    </>
  );
 }
}

export default App;